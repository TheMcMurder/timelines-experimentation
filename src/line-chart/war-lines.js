import React, { useMemo } from 'react'
import SvgLine from './svg-line.js'
import { schemeDark2, scaleOrdinal } from 'd3'

window.colors = scaleOrdinal(schemeDark2)
const colors = window.colors

export default function WarLines({ releventWars, xScale, yScale }) {
  return releventWars.map((war, index) => (
    <WarLine xScale={xScale} yScale={yScale} war={war} key={war.name} color={colors(index)} />
  ))
}

function WarLine({ war, xScale, yScale, color }) {
  const [minDate, maxDate] = xScale.domain()
  const data = [
    [minDate, war.dead],
    [maxDate, war.dead],
  ]
  const points = useLineChartPoints(xScale, yScale, data)
  return <SvgLine points={points} stroke={color} />
}

function useLineChartPoints(xScale, yScale, data) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(d[0]), yScale(d[1])]
    })
  }, [data, xScale, yScale])
}
