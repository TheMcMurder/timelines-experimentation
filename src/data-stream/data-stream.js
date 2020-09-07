import { useState, useEffect } from 'react'
import { from, interval } from 'rxjs'
import { scan, take, map, mergeMap } from 'rxjs/operators'

const APIURL = 'https://api.covidtracking.com/v1/us/daily.json'

// export const liveData$ = fromFetch(APIURL).pipe(
//   map(data => {
//     return data.map(d => ({
//       ...d,
//       date: new Date(d.dateChecked)
//     }))
//   })
// )

export const liveData$ = from(fetch(APIURL).then((d) => d.json())).pipe(
  map((data) => {
    return data.reverse().map((d) => ({
      ...d,
      date: new Date(d.dateChecked),
    }))
  }),
  mergeMap((data) => {
    return interval(100).pipe(
      take(data.length),
      scan((acc, currentIndex) => {
        return [...acc, data[currentIndex]]
      }, []),
    )
  }),
)

export const useLiveData$ = function () {
  const [data, setData] = useState([])
  useEffect(() => {
    const sub = liveData$.subscribe((data) => setData(data))
    return () => {
      sub.unsubscribe()
    }
  }, [])
  return data
}

export const useData$ = function () {
  const [data, setData] = useState([])
  useEffect(() => {
    const sub = data$.subscribe((data) => setData(data))
    return () => {
      sub.unsubscribe()
    }
  }, [])
  return data
}
