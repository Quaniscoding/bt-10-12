import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
    const [commentContent, setCommentContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentContent.trim()) {
            const newComment = {
                id: Date.now(),
                content: commentContent,
            };
            addComment(postId, newComment);
            setCommentContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Viết bình luận..."
            />
            <br />
            <button type="submit">Đăng bình luận</button>
        </form>
    );
};

export default CommentForm;
