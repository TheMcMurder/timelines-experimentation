import { useState, useEffect } from 'react'
import { from, ReplaySubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'

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

const trumpEvents = [
  {
    type: 'QUOTE',
    date: new Date('2020-01-22'),
    quote: `No. Not at all. And we have it totally under control. It’s one person coming in from China, and we have it under control. It’s — going to be just fine.`,
    source: 'CNBC',
    sourceLink:
      'https://www.cnbc.com/2020/01/22/cnbc-transcript-president-donald-trump-sits-down-with-cnbcs-joe-kernen-at-the-world-economic-forum-in-davos-switzerland.html',
  },
  {
    type: 'QUOTE',
    date: new Date('2020-01-30'),
    update: [
      {
        text: `Trump blocks (most) travel from China`,
        source:
          'https://www.whitehouse.gov/presidential-actions/proclamation-suspension-entry-immigrants-nonimmigrants-persons-pose-risk-transmitting-2019-novel-coronavirus/',
      },
    ],
    quote: `We think we have it very well under control. We have very little problem in this country at this moment... we think it’s going to have a very good ending for it.`,
    sourceLink: `https://factba.se/transcript/donald-trump-speech-kag-rally-des-moines-iowa-january-30-2020`,
    source: 'Trump Iowa Rally',
  },
  {
    type: 'TWEET',
    date: new Date('2020-02-24'),
    update: [
      { text: `Stock market plummets`, source: 'https://www.cnbc.com/2020/02/24/us-futures-coronavirus-outbreak.html' },
      {
        text: `Trump Requests 1.25 billion in emergency funding`,
        source: 'https://www.politico.com/news/2020/02/24/trump-coronavirus-budget-request-117275',
      },
    ],
    content:
      'The Coronavirus is very much under control in the USA. We are in contact with everyone and all relevant countries. CDC & World Health have been working hard and very smart. Stock Market starting to look very good to me!',
    source: 'https://twitter.com/realDonaldTrump/status/1232058127740174339',
  },
]

// pretty good starting point for trump https://www.poynter.org/fact-checking/2020/we-have-it-totally-under-control-a-timeline-of-president-donald-trumps-response-to-the-coronavirus-pandemic/
