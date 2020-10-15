import React from 'react'

export default function ExLink({ href, children }) {
  return (
    <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" href={href}>
      {children}
    </a>
  )
}
