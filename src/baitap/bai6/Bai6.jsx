import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

export default function Bai6() {
    const [notes, setNotes] = useState(() => {
        // Lấy dữ liệu từ localStorage khi khởi chạy ứng dụng
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // Lưu dữ liệu vào localStorage khi notes thay đổi
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    const updateNote = (updatedNote) => {
        setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className='bai6'>
            <h1>Note App</h1>
            <NoteForm onAdd={addNote} />
            <NoteList notes={notes} onUpdate={updateNote} onDelete={deleteNote} />
        </div>
    )
}
