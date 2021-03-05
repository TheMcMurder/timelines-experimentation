import React from 'react'
import { Link } from '@reach/router'

export default function ILink(props) {
  const { children, className, ...other } = props
  return (
    <Link className={`font-medium text-gray-500 hover:text-gray-200 ${className ? className : ''}`} {...other}>
      {children}
    </Link>
  )
}
