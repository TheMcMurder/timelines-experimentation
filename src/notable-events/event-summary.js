import React from 'react'

export function TrumpEvent({ event }) {
  return <Event person="TRUMP" event={event} />
}

export function BidenEvent({ event }) {
  return <Event person="BIDEN" event={event} />
}

function Event(props) {
  return props.event.map((event) => {
    return (
      <div className="rounded-lg overflow-hidden border border-gray-400 p-8 bg-white">
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
            <div className="font-bold">
              <a href={update.source}>{update.text}</a>
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
      <a href={event.sourceLink}>{event.source}</a>
    </div>
  )
}

function TweetEvent({ event }) {
  return (
    <div>
      <div className="text-lg">
        <q>{event.content}</q>
      </div>
      <a href={event.source}>View on Twitter</a>
    </div>
  )
}
