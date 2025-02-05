import React, { useState, useEffect } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';

const colors = [
  'bg-yellow-300',
  'bg-pink-300',
  'bg-blue-300',
  'bg-green-300',
  'bg-purple-300',
];

interface Note {
  id: number;
  text: string;
  color: string;
  favorite: boolean;
}

const StickyNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('stickyNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const saveNotes = () => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      const newNote: Note = {
        id: Date.now(),
        text: noteText,
        color: colors[Math.floor(Math.random() * colors.length)],
        favorite: false,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNoteText('');
    }
  };

  const toggleFavorite = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  };

  const handleDelete = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('stickyNotes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col items-center relative">
      <h1 className="text-3xl font-bold mb-6">Your Sticky Notes</h1>
      <div className="flex w-full max-w-2xl mb-4">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note..."
          className="p-3 w-full bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button onClick={handleAddNote} className="ml-3 bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition">
          Add
        </button>
        <button onClick={saveNotes} className="ml-3 bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 transition">
          Save
        </button>
      </div>
      <div className="mb-4">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2">Favorites Only</span>
          <input
            type="checkbox"
            checked={favoritesOnly}
            onChange={() => setFavoritesOnly(!favoritesOnly)}
            className="hidden"
          />
           <div className="w-10 h-5 bg-gray-700 rounded-full relative">
            <div
              className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${favoritesOnly ? 'translate-x-5' : ''}`}
            ></div>
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl px-4">
        {notes.filter(note => !favoritesOnly || note.favorite).map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-lg shadow-lg ${note.color} relative cursor-pointer`}
            onClick={() => setSelectedNote(note)}
          >
            <p className="text-gray-900 mb-4 truncate max-h-20 overflow-hidden">{note.text}</p>
            <div className="flex justify-between items-center">
              <button onClick={(e) => { e.stopPropagation(); toggleFavorite(note.id); }}>
                <FaHeart className={`text-lg ${note.favorite ? 'text-red-500' : 'text-gray-600'}`} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(note.id); }}>
                <FaTrash className="text-lg text-gray-600 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50" onClick={() => setSelectedNote(null)}>
          <div className={`p-6 rounded-lg shadow-2xl ${selectedNote.color} w-full max-w-md`} onClick={(e) => e.stopPropagation()}>
            <p className="text-gray-900 text-lg mb-4">{selectedNote.text}</p>
            <button onClick={() => setSelectedNote(null)} className="mt-4 bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyNotes;