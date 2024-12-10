const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');  // Import cors

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',  // Đảm bảo frontend đang chạy trên localhost:3000
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (data) => {
        socket.emit('message', 'Hello from server!');
    });
});


// Cấu hình CORS cho phép frontend từ localhost:3000
app.use(cors({
    origin: 'http://localhost:3000', // Đây là URL của frontend (React app)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Lắng nghe kết nối WebSocket
io.on('connection', (socket) => {
    console.log('A user connected');

    // Lắng nghe tin nhắn từ client và gửi tin nhắn đến tất cả các client
    socket.on('message', (message) => {
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Cung cấp giao diện người dùng (nếu cần)
app.use(express.static('public'));

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
