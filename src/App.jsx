
import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [notes, setNotes] = useState([])

  // Add a new note
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title || 'Untitled',
      content
    }
    setNotes(prev => [newNote, ...prev])
  }

  // Delete a note
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return (
    <>
      <Home 
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </>
  )
}

export default App
