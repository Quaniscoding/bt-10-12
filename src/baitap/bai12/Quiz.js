import React, { useState } from 'react';

const Quiz = ({ courseId }) => {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = 'React'; // Ví dụ câu hỏi cho khóa học React

        if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setResult('Đúng!');
        } else {
            setResult('Sai. Câu trả lời đúng là: React');
        }
    };

    return (
        <div>
            <h3>Bài tập kiểm tra cho Khóa học {courseId}</h3>
            <form onSubmit={handleSubmit}>
                <label>Nhập câu trả lời:</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit">Gửi bài</button>
            </form>
            {result && <p>{result}</p>}
        </div>
    );
};

export default Quiz;
