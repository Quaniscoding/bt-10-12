import React, { useEffect, useState } from 'react'

import './bai7.css'
import BlogForm from './BlogForm';
import BlogDetails from './BlogDetails';
import BlogList from './BlogList';
export default function Bai7() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Lấy danh sách bài viết từ API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 10))) // Lấy 10 bài viết đầu
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Thêm bài viết
    const addPost = (newPost) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => setPosts([...posts, { ...data, id: Date.now() }]));
    };

    // Sửa bài viết
    const updatePost = (updatedPost) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedPost),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then(() =>
                setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)))
            );
    };

    // Xóa bài viết
    const deletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        }).then(() => setPosts(posts.filter((post) => post.id !== id)));
    };
    return (
        <div className="bai7">
            <h1>Blog App</h1>
            {isEditing ? (
                <BlogForm
                    post={selectedPost}
                    onSubmit={(post) => {
                        if (post.id) updatePost(post);
                        else addPost(post);
                        setIsEditing(false);
                        setSelectedPost(null);
                    }}
                />
            ) : selectedPost ? (
                <BlogDetails
                    post={selectedPost}
                    onBack={() => setSelectedPost(null)}
                    onEdit={() => setIsEditing(true)}
                    onDelete={deletePost}
                />
            ) : (
                <BlogList posts={posts} onSelect={setSelectedPost} onDelete={deletePost} />
            )}
        </div>
    )
}
