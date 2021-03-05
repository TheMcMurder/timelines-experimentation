import React from 'react'

export default function Accreditation() {
  return (
    <div className="text-xs flex flex-col justify-center items-center">
      <div>
        Data pulled from <a href="https://covidtracking.com/">covidtracking.com</a>
      </div>
      <div>
        <a href="https://covidtracking.com/about-data/license/">covidtracking.com data </a>
        <span>licenced under a </span>
        <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons CC BY-NC-4.0 license</a>
      </div>
    </div>
  )
}
