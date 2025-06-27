
import React from 'react';
import { confirmarEliminacion, mostrarExito } from '../alerta';

function NoteItem({ note, onEdit, onDelete }) {
  const handleDelete = async () => {
    const confirmado = await confirmarEliminacion();
    if (confirmado) {
      onDelete(note.id);
      mostrarExito('Nota eliminada correctamente.');
    }
  };

  return (
    <div className="note-item">
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default NoteItem;
