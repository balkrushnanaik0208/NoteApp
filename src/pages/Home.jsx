import React from 'react'
import Cards from '../components/Cards'
import AddCard from '../components/AddCard'
import Navbar from '../components/Navbar'

const Home = ({ notes, addNote, deleteNote }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <AddCard addNote={addNote} />
                <Cards 
                    notes={notes} 
                    deleteNote={deleteNote} 
                />
            </div>
        </div>
    )
}

export default Home
