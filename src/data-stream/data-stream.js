import { useState, useEffect } from 'react'
import { from, interval, combineLatest } from 'rxjs'
import { scan, take, map, mergeMap, tap } from 'rxjs/operators'
import { getAllEventsSmallerAndNextLarger } from './casualty-event-data.js'
import { initializeTime } from '../controls/time-stream.js'
import { timeState$ } from '../controls/time-stream.js'

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
    const dataForCurrentDay = data[time.count]
    const releventEvents = getAllEventsSmallerAndNextLarger(dataForCurrentDay.death)
    const percentage = ((time.count + 1) / data.length) * 100
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
// export const liveData$ = data$.pipe(
//   mergeMap((data) => {
//     return interval(100).pipe(
//       take(data.length),
//       scan((acc, currentIndex) => {
//         return [...acc, data[currentIndex]]
//       }, []),
//     )
//   }),
//   map((data) => {
//     const [latest] = data.slice(-1)
//     const releventWars = getAllWarsSmallerAndNextLarger(latest.death)
//     return {
//       data,
//       releventWars,
//       lastDay: lastDayOfData,
//     }
//   }),
// )

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

// const stopWatch$ = events$.pipe(
//   startWith({
//     speed: 1000,
//     value: 0,
//   }),
//   scan((state, curr) => ({ ...state, ...curr }), {}),
//   // tap((state) => setValue(state.value)),
//   // switchMap((state) =>
//   //   // state.count
//   //   //   ? interval(state.speed).pipe(
//   //   //       tap(
//   //   //         _ =>
//   //   //           (state.value += state.countup ? state.increase : -state.increase)
//   //   //       ),
//   //   //       tap(_ => setValue(state.value))
//   //   //     )
//   //   //   : NEVER
//   // )
// );
