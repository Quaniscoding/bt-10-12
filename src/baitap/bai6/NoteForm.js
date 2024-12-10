import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        onAdd({ id: Date.now(), text });
        setText("");
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
