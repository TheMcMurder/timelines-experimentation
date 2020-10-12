import React from 'react'
import { useSeenDisclaimer } from '../persistent/persistent'

export default function Disclaimer(props) {
  const [seen, markAsSeen] = useSeenDisclaimer()
  if (seen) {
    return null
  } else {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    On Tracking Deaths
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray pb-2">
                      Data around deaths for COVID-19 varies slightly by source. For this project I chose to utilize
                      https://covidtracking.com/ because it seems to be the most accurate and is used by other
                      organizations.
                    </p>
                    <p className="text-sm leading-5 text-gray pb-2">
                      Because of small differences in reporting between sources, some claims about number of deaths will
                      be higher or lower than what covidtracking.
                    </p>
                    <p className="text-sm leading-5 text-gray pb-2">
                      Unfortanately not every state counts deaths the same way, and covid-19 is still such a new disease
                      with lots of unknowns so most experts agree that we are <i>undercounting</i> actual deaths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3">
              <span className="w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={markAsSeen}
                >
                  I understand
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
