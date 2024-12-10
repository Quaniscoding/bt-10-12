import React from "react";

const BlogList = ({ posts, onSelect, onDelete }) => {
    return (
        <div className="blog-list">
            {posts.map((post) => (
                <div key={post.id} className="blog-item">
                    <h2>{post.title}</h2>
                    <p>{post.body.slice(0, 100)}...</p>
                    <button onClick={() => onSelect(post)}>View Details</button>
                    <button onClick={() => onDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
