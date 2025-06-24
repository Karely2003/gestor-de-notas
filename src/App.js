import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (note) => {
    if (currentNote) {
    
      setNotes(notes.map(n => (n.id === currentNote.id ? { ...n, ...note } : n)));
    } else {
     
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
    setCurrentNote(null);
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (currentNote && currentNote.id === id) {
      setCurrentNote(null);
    }
  };

 
  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Gestor de Notas</h1>
      <SearchBar onSearch={setSearchTerm} />
      <NoteEditor onSave={handleSaveNote} noteToEdit={currentNote} />
      <NoteList
        notes={filteredNotes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default App;