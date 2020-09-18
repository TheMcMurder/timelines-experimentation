import React, { useMemo, useState, useEffect } from 'react'
import { scaleLinear, scaleUtc, max, extent } from 'd3'

export default function LineChart({ children, data, margin, height, width, xDomainFn, yDomainFn, yAxisMax }) {
  return (
    <div>
      <svg viewBox={[0, 0, width, height]}>{children}</svg>
    </div>
  )
}
