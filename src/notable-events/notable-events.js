import React from 'react'
import { BidenEvent, TrumpEvent, NeutralEvent } from './event-summary.js'
import { useHighlightBidenEvents, useHighlightTrumpEvents, useHighlightNeutralEvents } from './notable-events-stream.js'
import EventsSVG from './events-svg.js'

export default function NotableEvents(props) {
  const { currentDay } = props
  const highlightedBidenEvent = useHighlightBidenEvents()
  const highlightedTrumpEvent = useHighlightTrumpEvents()
  const highlightedNeutralEvent = useHighlightNeutralEvents()
  if (currentDay) {
    return (
      <div>
        <EventsSVG {...props} />
        <div className="bg-gray-100 w-full">
          <div className="m-2 flex">
            <div className="flex-1 flex-col">
              <div className="flex justify-center">Biden</div>
              <div className="flex justify-center items-center">
                {highlightedBidenEvent && <BidenEvent event={highlightedBidenEvent} />}
              </div>
            </div>
            <div className="flex-1 flex-col">
              <div className="flex justify-center">Events</div>
              <div className="flex justify-center items-center">
                {highlightedNeutralEvent && <NeutralEvent event={highlightedNeutralEvent} />}
              </div>
            </div>
            <div className="flex-1 flex-col">
              <div className="flex justify-center">Trump</div>
              <div className="flex justify-center items-center">
                {highlightedTrumpEvent && <TrumpEvent event={highlightedTrumpEvent} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}
