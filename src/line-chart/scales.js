import { scaleLinear, scaleUtc, max, extent } from 'd3'
import { useMemo } from 'react'
export function useGetLinearScaleFn({ scaleMin = 0, scaleMax, margin, domainFn, height, data }) {
  return useMemo(
    () =>
      scaleLinear()
        .domain([scaleMin, scaleMax ? scaleMax : max(data, domainFn)])
        .nice()
        .range([height - margin.bottom, margin.top]),
    [data, margin.bottom, height, margin.top],
  )
}

export function useGetUtcScaleFn({ margin, domainFn, data, width }) {
  return useMemo(
    () =>
      scaleUtc()
        .domain(extent(data, domainFn))
        .range([margin.left, width - margin.right]),
    [data, margin.left, margin.right, width],
  )
}
