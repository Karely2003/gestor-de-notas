import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-item">
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Editar</button>
        <button onClick={() => onDelete(note.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default NoteItem;