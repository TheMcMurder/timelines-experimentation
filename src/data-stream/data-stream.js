import { useState, useEffect } from 'react'
import { from, interval } from 'rxjs'
import { scan, take, map, mergeMap } from 'rxjs/operators'
import { getClosestLargerWarData } from './war-data.js'

const APIURL = 'https://api.covidtracking.com/v1/us/daily.json'

const data$ = from(fetch(APIURL).then((r) => r.json())).pipe(
  map((data) => {
    return data.reverse().map((d) => ({
      ...d,
      date: new Date(d.dateChecked),
    }))
  }),
)

export const liveData$ = data$.pipe(
  mergeMap((data) => {
    return interval(100).pipe(
      take(data.length),
      scan((acc, currentIndex) => {
        return [...acc, data[currentIndex]]
      }, []),
    )
  }),
  map((data) => {
    const closestWar = getClosestLargerWarData(data[data.length - 1].death)
    return {
      data,
      closestWar,
    }
  }),
)

export const useLiveData$ = function () {
  const [data, setData] = useState({ data: [], max: 0 })
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
