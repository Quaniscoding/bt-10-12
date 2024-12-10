import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

const Post = ({ post, toggleLike, addComment }) => {
    const [isLiked, setIsLiked] = useState(post.liked);

    const handleLike = () => {
        toggleLike(post.id);
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <div>
                <p>{post.content}</p>
                {post.image && <img src={post.image} alt="Post" width="200" />}
                <div>
                    <button onClick={handleLike}>
                        {isLiked ? 'Bỏ thích' : 'Thích'}
                    </button>
                    <h4>Bình luận</h4>
                    {post.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                    <CommentForm postId={post.id} addComment={addComment} />
                </div>
            </div>
        </div>
    );
};

export default Post;
