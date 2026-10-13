import { useState } from 'react'
import './App.css'

function App() {
  const [travelerName, setTravelerName] = useState('')
  const [destination, setDestination] = useState('')
  const [travelMode, setTravelMode] = useState('')
  const [accommodation, setAccommodation] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const travelPlan = {
      travelerName,
      destination,
      travelMode,
      accommodation,
    }

    try {
      const response = await fetch('http://localhost:5000/api/travels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(travelPlan),
      })

      const data = await response.json()
      setMessage(data.message || 'Travel plan saved successfully.')
      console.log('Travel plan saved:', data)
    } catch (error) {
      console.error('Error saving travel plan:', error)
      setMessage('Failed to save travel plan.')
    }
  }

  return (
    <div className="travel-app">
      <h1>Travel Planner</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Traveler Name
          <input
            type="text"
            value={travelerName}
            onChange={(e) => setTravelerName(e.target.value)}
            placeholder="Enter traveler name"
          />
        </label>

        <label>
          Destination
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
          />
        </label>

        <label>
          Travel Mode
          <input
            type="text"
            value={travelMode}
            onChange={(e) => setTravelMode(e.target.value)}
            placeholder="Car, plane, train..."
          />
        </label>

        <label>
          Accommodation
          <input
            type="text"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            placeholder="Hotel, cabin, hostel..."
          />
        </label>

        <button type="submit">Save Travel Plan</button>
      </form>

      {message && <p className="status-message">{message}</p>}
    </div>
  )
}

export default App
