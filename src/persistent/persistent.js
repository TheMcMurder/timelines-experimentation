import { useState } from 'react'

const key = 'timeline-vis:'

export const covidDisclaimerKey = `${key}covid-dislaimer-seen`

export function useSeenDisclaimer() {
  const [seenDisclaimer, setSeenDisclaimer] = useState(() => localStorage.getItem(covidDisclaimerKey) === 'true')
  function markAsSeen() {
    localStorage.setItem(covidDisclaimerKey, true)
    setSeenDisclaimer(true)
  }

  return [seenDisclaimer, markAsSeen]
}
