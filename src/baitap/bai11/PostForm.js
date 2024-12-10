import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            const newPost = {
                id: Date.now(),
                content,
                image,
                comments: [],
                liked: false,
            };
            addPost(newPost);
            setContent('');
            setImage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Viết bài..."
            />
            <br />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Link hình ảnh (tuỳ chọn)"
            />
            <br />
            <button type="submit">Đăng bài</button>
        </form>
    );
};

export default PostForm;
