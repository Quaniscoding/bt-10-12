import React, { useEffect, useState } from 'react'
import './bai11.css'
import Navbar from './Navbar';
import Profile from './Profile';
import PostForm from './PostForm';
import Post from './Post';
export default function Bai11() {
    const [posts, setPosts] = useState(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts'));
        return savedPosts || [];
    });
    const [user, setUser] = useState(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        return savedUser || { name: 'Người dùng', avatar: '' };
    });

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
        localStorage.setItem('user', JSON.stringify(user));
    }, [posts, user]);

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    const addComment = (postId, comment) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId
                ? { ...post, comments: [...post.comments, comment] }
                : post
        );
        setPosts(updatedPosts);
    };

    const toggleLike = (postId) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId
                ? { ...post, liked: !post.liked }
                : post
        );
        setPosts(updatedPosts);
    };
    return (
        <div className='bai11'>
            <Navbar />
            <Profile user={user} setUser={setUser} />
            <h2>Đăng bài viết mới</h2>
            <PostForm addPost={addPost} />
            <h2>Danh sách bài viết</h2>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    toggleLike={toggleLike}
                    addComment={addComment}
                />
            ))}
        </div>
    )
}
