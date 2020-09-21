import React, { useMemo } from 'react'
import SvgLine from './svg-line.js'

export default function WarLines({ dead, releventWars, xScale, yScale }) {
  return releventWars.map((war) => {
    if (war.hidePoint && dead > war.hidePoint) {
      return null
    } else {
      return <WarLine xScale={xScale} yScale={yScale} war={war} key={war.name} />
    }
  })
}

function WarLine({ war, xScale, yScale }) {
  const [minDate, maxDate] = xScale.domain()
  const data = [
    [minDate, war.dead],
    [maxDate, war.dead],
  ]
  const points = useLineChartPoints(xScale, yScale, data)
  return (
    <>
      <SvgLine points={points} stroke={war.color} strokeWidth="0.5" />
      <text
        transform={`translate(${points[0][0]}, ${points[0][1] - 0.5})`}
        fill={war.color}
        style={{ fontSize: '0.5rem' }}
      >
        {war.name}
      </text>
    </>
  )
}

function useLineChartPoints(xScale, yScale, data) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(d[0]), yScale(d[1])]
    })
  }, [data, xScale, yScale])
}
