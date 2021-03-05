import React from 'react'
import FancyLink from './fancy-link.js'
import Toggle from '../toggle/Toggle.js'

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <p className="text-2xl tracking-tight mb-10">
        Thanks for visiting my experimental site. I like building visualizations for fun, here are some visualizations
        I've made that I wanted to share.
      </p>
      <div className="flex flex-wrap">
        <FancyLink to="covid-19" title="Covid-19 and 2020 US Presidental race" />
        <Toggle toggle={'electoralCollege'}>
          <FancyLink to="electoral-college" title="US Electoral College" />
        </Toggle>
      </div>
    </div>
  )
}
