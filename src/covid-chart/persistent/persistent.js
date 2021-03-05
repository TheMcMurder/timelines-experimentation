import { useState } from 'react'

const key = 'timeline-vis:'

export const covidDisclaimerKey = `${key}covid-dislaimer-seen`

export function useSeenDisclaimer() {
  const [seenDisclaimer, setSeenDisclaimer] = useState(() => localStorage.getItem(covidDisclaimerKey) === 'true')
  function markAsSeen(boolValueOrEvent) {
    const bool = typeof boolValueOrEvent === 'boolean' ? boolValueOrEvent : true
    localStorage.setItem(covidDisclaimerKey, bool)
    setSeenDisclaimer(bool)
  }

  return [seenDisclaimer, markAsSeen]
}
