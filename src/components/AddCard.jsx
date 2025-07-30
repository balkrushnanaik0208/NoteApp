import React, { useState } from 'react'

const AddCard = ({ addNote }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleAddNote = () => {
        if (content.trim() || title.trim()) {
            addNote(title, content)
            setTitle('')
            setContent('')
        }
    }

    return (
        <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 mb-3 text-lg font-medium border border-gray-300 rounded outline-none focus:ring-2 focus:gray-400"
                />
                <textarea
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded outline-none focus:ring-2 focus:gray-400 resize-none"
                    rows="4"
                />
                <button
                    onClick={handleAddNote}
                    className="w-full py-2 bg-gray-600 text-white font-medium rounded hover:bg-gray-500 transition-colors"
                >
                    Add Note
                </button>
            </div>
        </div>
    )
}

export default AddCard;
