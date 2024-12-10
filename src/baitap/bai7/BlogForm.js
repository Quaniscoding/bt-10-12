import React, { useState } from "react";

const BlogForm = ({ post = {}, onSubmit }) => {
    const [title, setTitle] = useState(post.title || "");
    const [body, setBody] = useState(post.body || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: post.id, title, body });
    };

    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">{post.id ? "Update" : "Add"} Post</button>
        </form>
    );
};

export default BlogForm;
