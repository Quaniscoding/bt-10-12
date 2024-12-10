import React from "react";

const BlogDetails = ({ post, onBack, onEdit, onDelete }) => {
    return (
        <div className="blog-details">
            <button onClick={onBack}>Back</button>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
    );
};

export default BlogDetails;
