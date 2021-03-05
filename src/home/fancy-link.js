import React from 'react'
import { Link } from '@reach/router'

export default function FancyLink({ to, title }) {
  return (
    <Link to={to} className="m-4 overflow-hidden rounded-2xl flex shadow-lg">
      <div className="w-full sm:w-60 flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
        <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
          <h2 className="text-xl text-white font-semibold mb-2 text-shadow">{title}</h2>
        </div>
      </div>
    </Link>
  )
}
