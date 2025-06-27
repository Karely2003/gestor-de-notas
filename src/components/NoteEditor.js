
import React, { useState, useEffect } from 'react';
import { mostrarAlerta, mostrarExito } from '../alerta';

function NoteEditor({ onSave, noteToEdit }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(noteToEdit ? noteToEdit.content : '');
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      mostrarAlerta('Por favor escribe una nota antes de guardar.');
      return;
    }

    onSave({ content });
    setContent('');

    if (noteToEdit) {
      mostrarExito('Nota actualizada correctamente.');
    } else {
      mostrarExito('Nota guardada exitosamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu nota aqui..."
      />
      <button type="submit">
        {noteToEdit ? 'Actualizar Nota' : 'Guardar Nota'}
      </button>
    </form>
  );
}

export default NoteEditor;
