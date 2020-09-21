import { interval, NEVER, ReplaySubject, Subject } from 'rxjs'
import { scan, shareReplay, startWith, switchMap, tap, map } from 'rxjs/operators'

const __time$ = new Subject()
const _timeState$ = new ReplaySubject(1)

const _time$ = __time$.asObservable().pipe(
  startWith({
    currentDay: null,
    lastDay: null,
    playing: false,
    initialized: false,
    speed: 100,
  }),
  scan(reducer, {}),
  tap((state) => {
    _timeState$.next(state)
  }),
  switchMap((state) => {
    if (state.playing && state.currentDay.getTime() < state.lastDay.getTime()) {
      return interval(state.speed).pipe(
        tap(() => {
          triggerNextDay()
        }),
        map(() => state),
      )
    } else {
      return NEVER
    }
  }),
)

const sub = _time$.subscribe()
const test = _timeState$.subscribe((v) => console.log('test', v))

export const time$ = _timeState$.asObservable()

function triggerNextDay() {
  __time$.next({ type: 'increment' })
}

export function initializeTime(startingDate, endingDate) {
  __time$.next({ type: 'initialize', payload: { startingDate, endingDate } })
}

export function start() {
  __time$.next({ type: 'start' })
}

export function pause() {
  __time$.next({ type: 'pause' })
}

function reducer(acc, current, index) {
  if (index === 0) return { ...acc, ...current }
  // listeners always available
  if (current.type === 'initialize') {
    return {
      ...acc,
      currentDay: current.payload.startingDate,
      initalized: true,
      lastDay: current.payload.endingDate,
    }
  } else if (current.type === 'pause') {
    return {
      ...acc,
      playing: false,
    }
  }
  // listeners only available when initialized
  if (acc.initalized) {
    if (current.type === 'start') {
      return {
        ...acc,
        playing: true,
      }
    } else if (current.type === 'increment') {
      const nextDay = new Date(acc.currentDay)
      nextDay.setDate(nextDay.getDate() + 1)
      return {
        ...acc,
        currentDay: nextDay,
      }
    }
    return acc
  }
  return acc
}
