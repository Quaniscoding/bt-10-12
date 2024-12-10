import React from 'react';

const ChatList = ({ messages }) => {
    return (
        <div className="chat-list">
            {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                    <strong>{msg.user}: </strong>{msg.text}
                </div>
            ))}
        </div>
    );
};

export default ChatList;
