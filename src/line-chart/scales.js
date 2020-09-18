import { scaleLinear, scaleUtc, max, extent } from 'd3'
import { useMemo } from 'react'
export function useGetLinearScaleFn({ scaleMin = 0, scaleMax, margin, domainFn, height, data }) {
  return useMemo(
    () =>
      scaleLinear()
        .domain([scaleMin, scaleMax ? scaleMax : max(data, domainFn)])
        .nice()
        .range([height - margin.bottom, margin.top]),
    [data, margin.bottom, height, margin.top, scaleMax],
  )
}

export function useGetUtcScaleFn({ margin, domainFn, data, width, scaleMax }) {
  const [min, max] = useMemo(() => extent(data, domainFn), [data, domainFn])
  return useMemo(
    () =>
      scaleUtc()
        .domain([min, scaleMax || max])
        .range([margin.left, width - margin.right]),
    [min, max, margin.left, margin.right, width, scaleMax],
  )
}
