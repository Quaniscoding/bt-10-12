import React, { useState } from "react";

const NoteList = ({ notes, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (note) => {
        setIsEditing(note.id);
        setEditText(note.text);
    };

    const handleSave = (id) => {
        onUpdate({ id, text: editText });
        setIsEditing(null);
        setEditText("");
    };

    return (
        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} className="note-item">
                    {isEditing === note.id ? (
                        <div className="edit-form">
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={() => handleSave(note.id)}>Save</button>
                        </div>
                    ) : (
                        <p>{note.text}</p>
                    )}
                    <div className="note-actions">
                        <button onClick={() => handleEdit(note)}>Edit</button>
                        <button onClick={() => onDelete(note.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
