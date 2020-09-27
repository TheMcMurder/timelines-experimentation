import { useState, useEffect } from 'react'
import { from, ReplaySubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { trumpEvents } from './data/trump-events.js'
import { neutralEvents } from './data/neutral-events.js'
import { isRoughlySameDate } from '../controls/time-stream.js'

const msInADay = 86400000

const _bidenEvent$ = new ReplaySubject(1)
const _trumpEvent$ = new ReplaySubject(1)
const _neutralEvent$ = new ReplaySubject(1)

export function useHighlightTrumpEvents() {
  const [event, setEvent] = useState()
  useEffect(() => {
    const sub = _trumpEvent$.subscribe(setEvent)
    return () => sub.unsubscribe()
  }, [])
  return event
}

export function useHighlightNeutralEvents() {
  const [event, setEvent] = useState()
  useEffect(() => {
    const sub = _neutralEvent$.subscribe(setEvent)
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
      const todayEvents = events.filter((evt) => isRoughlySameDate(evt.date, currentDay))
      _trumpEvent$.next(todayEvents)
    }),
  )
}

export function getNeutralEvents$(scale, currentDay) {
  return from([neutralEvents]).pipe(
    map((events) => {
      return events.map((e) => {
        return { ...e, x: scale(e.date) }
      })
    }),
    tap((events) => {
      const todayEvents = events.filter((evt) => isRoughlySameDate(evt.date, currentDay))
      _neutralEvent$.next(todayEvents)
    }),
  )
}
