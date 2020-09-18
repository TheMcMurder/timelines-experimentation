import React, { useMemo } from 'react'
import SvgLine from './svg-line.js'

export default function WarLines({ releventWars, xScale, yScale }) {
  return releventWars.map((war) => <WarLine xScale={xScale} yScale={yScale} war={war} key={war.name} />)
}

function WarLine({ war, xScale, yScale }) {
  const [minDate, maxDate] = xScale.domain()
  const data = [
    [minDate, war.dead],
    [maxDate, war.dead],
  ]
  const points = useLineChartPoints(xScale, yScale, data)
  return <SvgLine points={points} stroke={war.color} />
}

function useLineChartPoints(xScale, yScale, data) {
  return useMemo(() => {
    return data.map((d) => {
      return [xScale(d[0]), yScale(d[1])]
    })
  }, [data, xScale, yScale])
}
