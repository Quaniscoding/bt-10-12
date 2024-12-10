import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import './bai13.css'
import Chat from './Chat';
const socket = io('http://localhost:5000');
export default function Bai13() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Lắng nghe sự kiện "message" từ server
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = (message) => {
        socket.emit('message', message);  // Gửi tin nhắn đến server
    };

    return (
        <div className='bai13'>
            <Chat messages={messages} sendMessage={sendMessage} />
        </div>
    )
}
