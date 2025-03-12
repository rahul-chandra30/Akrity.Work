import React from 'react'

const Meeting = ({ children }: { children: React.ReactNode }) => {
  const details = String(children)
    .split(',')
    .map((item) => item.trim())
  const [attendees, time, agenda, outcome] = details

  return (
    <div className="my-6">
      <h3 className="mb-2 text-xl font-bold text-teal-600">Meeting Update</h3>
      <div className="text-gray-700">
        <p>
          <span className="font-semibold">Attendees:</span> {attendees || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Agenda:</span> {agenda || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Outcome:</span> {outcome || 'N/A'}
        </p>
      </div>
    </div>
  )
}

export default Meeting
