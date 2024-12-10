import React from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const Chat = ({ messages, sendMessage }) => {
    return (
        <div className="chat-container">
            <h1>Ứng dụng Chat Thời gian Thực</h1>
            <ChatList messages={messages} />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default Chat;
