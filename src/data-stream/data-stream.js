import { useState, useEffect } from 'react'
import { randomData } from './random.js'
import { interval } from 'rxjs'
import { scan, take } from 'rxjs/operators'

export const data = randomData
export const data$ = interval(1000).pipe(
  take(data.length),
  scan((acc, currentIndex) => {
    return [...acc, data[currentIndex]]
  }, []),
)

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

// const simpleDataIn = [
//   { date: '2007-04-24', value: 1 },
//   { date: '2007-04-25', value: 2 },
//   { date: '2007-04-26', value: 3 },
//   { date: '2007-04-27', value: 4 },
//   { date: '2007-04-28', value: 5 },
//   { date: '2007-04-29', value: 6 },
// ]

// export const data = simpleDataIn.map((d) => ({
//   ...d,
//   date: new Date(d.date),
// }))
