import React, { useCallback } from 'react'
import { Link } from '@reach/router'

export default function ILink(props) {
  const { children, className = '', ...other } = props
  const baseClasses = `font-medium text-gray-500 hover:text-gray-200 ${className}`
  const activeClasses = `text-teal-400`
  const getPropsHandler = useCallback(addClassIfActive(baseClasses, activeClasses), [])
  return (
    <Link getProps={getPropsHandler} className={baseClasses} {...other}>
      {children}
    </Link>
  )
}

function isActive(baseClasses, classesToAdd, { isPartiallyCurrent }) {
  console.log('args', arguments)
  return isPartiallyCurrent ? { className: `${baseClasses} ${classesToAdd}` } : { className: `${baseClasses}` }
}

function addClassIfActive(baseClasses, classesToAdd) {
  return isActive.bind(null, baseClasses, classesToAdd)
}
