import { useState, useEffect } from 'react'
import { of, combineLatest } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { getAllEventsSmallerAndNextLarger } from './casualty-event-data.js'
import { initializeTime } from '../controls/time-stream.js'
import { timeState$, isRoughlySameDate } from '../controls/time-stream.js'
import { exported } from './exported-data.js'

// const APIURL = 'https://api.covidtracking.com/v1/us/daily.json'

let lastDayOfData = new Date()

// I used to make this network request, but because I don't want to hit their server constantly for a project I'm not updating much I'm changing this to be data last pulled on March 5 2021 and chopping off every event in 2021
// const data$ = from(
//   fetch(APIURL).then((r) => {
//     return r.json()
//   }),
// ).pipe(
//   map((data) => {
//     lastDayOfData = new Date(data[0].dateChecked)
//     return data.reverse().map((d) => ({
//       ...d,
//       date: new Date(d.dateChecked),
//     }))
//   }),
//   tap((data) => {
//     console.log('data', JSON.stringify(data))
//     initializeTime(data[0].date, data[data.length - 1].date)
//   }),
// )

const data$ = of(exported).pipe(
  map((data) => {
    lastDayOfData = new Date(data[data.length - 1].dateChecked)
    return data.map((d) => ({
      ...d,
      date: new Date(d.date),
    }))
  }),
  tap((data) => {
    const first = data[0].date
    const last = data[data.length - 1].date
    initializeTime(first, last)
  }),
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
