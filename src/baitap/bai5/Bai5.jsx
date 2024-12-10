import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import UserList from './UserList';
import UserDetails from './UserDetails';
import './bai5.css'
export default function Bai5() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };
  return (
    <div className='bai5'>
      <h1>User Management</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <UserList users={filteredUsers} onSelectUser={setSelectedUser} />
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  )
}
