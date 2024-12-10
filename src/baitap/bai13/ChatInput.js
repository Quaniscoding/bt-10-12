import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            sendMessage({ user: 'User', text: message });
            setMessage('');
        }
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
            />
            <button onClick={handleSend}>Gửi</button>
        </div>
    );
};

export default ChatInput;
