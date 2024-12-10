import React, { useState } from 'react';

const Profile = ({ user, setUser }) => {
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar);

    const handleSave = () => {
        const updatedUser = { name, avatar };
        setUser(updatedUser);
    };

    return (
        <div>
            <h2>Trang Cá Nhân</h2>
            <label>Tên: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Ảnh đại diện: </label>
            <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
            />
            <br />
            <button onClick={handleSave}>Lưu</button>
            <div>
                <h3>Thông tin người dùng:</h3>
                <p>Tên: {user.name}</p>
                <p>Ảnh đại diện: <img src={user.avatar} alt="Avatar" width="50" /></p>
            </div>
        </div>
    );
};

export default Profile;
