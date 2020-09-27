import { useState, useEffect } from 'react'
import { from, interval, combineLatest } from 'rxjs'
import { scan, take, map, mergeMap, tap } from 'rxjs/operators'
import { getAllEventsSmallerAndNextLarger } from './casualty-event-data.js'
import { initializeTime } from '../controls/time-stream.js'
import { timeState$, isRoughlySameDate } from '../controls/time-stream.js'

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
  tap((data) => initializeTime(data[0].date, data[data.length - 1].date)),
)

export const liveData$ = combineLatest([data$, timeState$]).pipe(
  map(([data, time]) => {
    const { currentDay, lastDay } = time
    const findIndex = data.findIndex((d) => {
      return isRoughlySameDate(currentDay, d.date)
    })
    const index = findIndex !== -1 ? findIndex : 0
    const dataForCurrentDay = data[index]
    const releventEvents = getAllEventsSmallerAndNextLarger(dataForCurrentDay.death)
    const percentage = ((index + 1) / data.length) * 100
    return {
      percentage,
      lineChartData: data,
      currentDay,
      dataForCurrentDay,
      lastDay,
      releventEvents,
      lastDay: lastDayOfData,
    }
  }),
)

export const useLiveData$ = function () {
  const [data, setData] = useState({ lineChartData: [] })
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
