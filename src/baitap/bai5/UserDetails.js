import React from "react";

const UserDetails = ({ user }) => {
    return (
        <div className="user-details">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            <p><strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
};

export default UserDetails;
