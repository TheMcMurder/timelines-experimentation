import React from 'react'
import ExLink from '../external-link.js'

export function TrumpEvent({ event }) {
  return <Event person="TRUMP" event={event} />
}

export function BidenEvent({ event }) {
  return <Event person="BIDEN" event={event} />
}

export function NeutralEvent({ event }) {
  return <Event person="NONE" event={event} />
}

function Event(props) {
  return props.event.map((event) => {
    return (
      <div key={event} className="rounded-lg overflow-hidden border border-gray-400 p-8 bg-white">
        <EventUpdate event={event} />
        {event.type === 'TWEET' && <TweetEvent event={event} />}
        {event.type === 'QUOTE' && <QuoteEvent event={event} />}
      </div>
    )
  })
}

function EventUpdate({ event }) {
  if (event && event.update) {
    return (
      <div className="border-b mx-1 pb-1 mb-2 border-gray-400">
        {event.update.map((update) => {
          return (
            <div key={update} className="font-bold">
              <div>{update.text}</div>
              <ExLink href={update.source}>source</ExLink>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}

function QuoteEvent({ event }) {
  return (
    <div>
      {event.quote && <div>"{event.quote}"</div>}
      <ExLink href={event.sourceLink}>{event.source}</ExLink>
    </div>
  )
}

function TweetEvent({ event }) {
  return (
    <div>
      <div className="text-lg">
        <q>{event.content}</q>
      </div>
      <ExLink href={event.source}>View on Twitter</ExLink>
    </div>
  )
}
