import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import data from '../data/data'

function App() {
  const mappedData = data.map((location) => {
    return <Location
      key = {location.key}
      location = {location}
    />

  })
  return (
    <main className='main-section'>
      <Navbar />
      <section className='journal-section'>
        {mappedData}
      </section>
    </main>
  )
}

export default App
