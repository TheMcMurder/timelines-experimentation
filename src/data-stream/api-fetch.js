import { useState, useEffect } from 'react'
const APIURL = 'https://api.covidtracking.com/v1/us/daily.json'

export default function useFetchData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])
  return [loading, data]
}
