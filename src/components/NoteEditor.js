import React, { useState, useEffect } from 'react';

function NoteEditor({ onSave, noteToEdit }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(noteToEdit ? noteToEdit.content : '');
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSave({ content });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu nota aquí..."
      />
      <button type="submit">{noteToEdit ? 'Actualizar Nota' : 'Guardar Nota'}</button>
    </form>
  );
}

export default NoteEditor;