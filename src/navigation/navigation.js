import React from 'react'
import Link from './internal-link.js'
import NavIcon from './nav-icon.js'

export default function NavigationBar(props) {
  return (
    <nav className="border-gray-200 bg-gray-900 z-10">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="sm:none text-white mr-4 sm:mr-1">
          <Link to="/" className="flex items-center">
            <NavIcon className="text-white mr-0 sm:mr-2" />
            <span className="hidden sm:block text-white">Timelines Playground</span>
          </Link>
        </div>
        <div className="flex-1 flex sm:flex-none items-center justify-between text-sm text-teal-400 font-medium">
          <Link to="other">Other</Link>
          <Link to="covid-19">Covid-19 US Election</Link>
        </div>
      </div>
    </nav>
  )
}

/*
      <header class="relative z-10 border-b border-gray-200 bg-white">
        <div class="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div class="md:flex items-center">
            <p class="hidden md:block mt-2 ml-3 text-sm text-gray-500 md:mt-0">
              <span class="-ml-2 md:ml-0 lg:hidden">by the creators of Tailwind CSS</span>
              <span class="hidden lg:inline">Beautiful UI components by the creators of Tailwind CSS</span>
            </p>
          </div>

          <div class="flex text-sm">
            <a href="/components" class="font-medium text-gray-500 hover:text-gray-900">
              Browse
            </a>
            <a href="/pricing" class="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
              Pricing
            </a>
            <a href="/login" class="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">
              Login
            </a>
          </div>
        </div>
        <div class="md:hidden mt-1 px-4 pb-4 sm:px-6 lg:px-8">
          <p class="text-sm text-gray-500 md:mt-0">
            <span class="-ml-2 md:ml-0 lg:hidden">by the creators of Tailwind CSS</span>
            <span class="hidden lg:inline">Beautiful UI components by the creators of Tailwind CSS</span>
          </p>
        </div>
      </header>
*/
