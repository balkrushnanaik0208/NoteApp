import React from 'react'

const Card = ({ note, deleteNote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-200 mb-4">
      <div className="flex justify-between items-start mb-2">
        {note.title && (
          <h3 className="text-lg font-medium text-gray-800 mr-2">{note.title}</h3>
        )}
        <button
          onClick={() => deleteNote(note.id)}
          className="p-1 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded"
          title="Delete note"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      
      {note.content && (
        <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
      )}
    </div>
  )
}

const Cards = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="mt-4 text-lg font-medium text-gray-900">Save first note here</h3>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Card key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  )
}

export default Cards;
