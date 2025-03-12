import React from 'react'

interface MeetingProps {
  children: React.ReactNode
  title?: string
}

const Meeting = ({ children, title = 'Meeting Update' }: MeetingProps) => {
  const details = String(children)
    .split(',')
    .map((item) => item.trim())
  const [attendees, time, agenda, outcome] = details

  return (
    <div className="my-6 overflow-hidden">
      <div className="rounded-xl border border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-700/50 pb-4">
          <h3 className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
            {title}
          </h3>
          <span className="rounded-full bg-gray-700/50 px-3 py-1 text-sm text-gray-300">
            {time || 'N/A'}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-300">
          <div className="group flex items-start">
            <span className="w-24 flex-shrink-0 text-gray-500 transition-colors group-hover:text-teal-400">
              Attendees:
            </span>
            <span className="flex-grow font-medium">{attendees || 'N/A'}</span>
          </div>

          <div className="group flex items-start">
            <span className="w-24 flex-shrink-0 text-gray-500 transition-colors group-hover:text-teal-400">
              Agenda:
            </span>
            <span className="flex-grow font-medium">{agenda || 'N/A'}</span>
          </div>

          <div className="group flex items-start">
            <span className="w-24 flex-shrink-0 text-gray-500 transition-colors group-hover:text-teal-400">
              Outcome:
            </span>
            <span className="flex-grow rounded-lg bg-gray-700/50 px-3 py-1 font-medium">
              {outcome || 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting
