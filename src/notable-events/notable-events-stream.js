import { useState, useEffect } from 'react'
import { from, ReplaySubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { trumpEvents } from './trump-events.js'

const msInADay = 86400000

const _bidenEvent$ = new ReplaySubject(1)
const _trumpEvent$ = new ReplaySubject(1)

export function useHighlightTrumpEvents() {
  const [event, setEvent] = useState()
  useEffect(() => {
    const sub = _trumpEvent$.subscribe(setEvent)
    return () => sub.unsubscribe()
  }, [])
  return event
}

export function useHighlightBidenEvents() {
  const [event, setEvent] = useState()
  useEffect(() => {
    const sub = _bidenEvent$.subscribe(setEvent)
    return () => sub.unsubscribe()
  }, [])
  return event
}

export function getTrumpEvents$(scale, currentDay) {
  return from([trumpEvents]).pipe(
    map((events) => {
      return events.map((e) => {
        return { ...e, x: scale(e.date) }
      })
    }),
    tap((events) => {
      const todayEvents = events.filter((evt) => Math.abs(evt.date.getTime() - currentDay.getTime()) < msInADay)
      if (todayEvents.length > 0) {
        _trumpEvent$.next(todayEvents)
      }
    }),
  )
}
