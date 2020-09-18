import { useState, useEffect } from 'react'
import { from, interval } from 'rxjs'
import { scan, take, map, mergeMap } from 'rxjs/operators'
import { getAllWarsSmallerAndNextLarger } from './war-data.js'

const APIURL = 'https://api.covidtracking.com/v1/us/daily.json'

let lastDayOfData = new Date()

const data$ = from(
  fetch(APIURL).then((r) => {
    return r.json()
  }),
).pipe(
  map((data) => {
    lastDayOfData = new Date(data[0].dateChecked)
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
    const [latest] = data.slice(-1)
    const releventWars = getAllWarsSmallerAndNextLarger(latest.death)
    return {
      data,
      releventWars,
      lastDay: lastDayOfData,
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
