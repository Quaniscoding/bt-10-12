import React, { useState } from 'react';
import ProgressTracker from './ProgressTracker';
import Quiz from './Quiz';

const Course = ({ course, updateProgress }) => {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleProgressChange = (progress) => {
        updateProgress(course.id, progress);
    };

    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div>
            <h3>{course.name}</h3>
            <ProgressTracker
                progress={course.progress}
                onProgressChange={handleProgressChange}
            />
            {!showQuiz ? (
                <button onClick={handleStartQuiz}>Bắt đầu bài tập kiểm tra</button>
            ) : (
                <Quiz courseId={course.id} />
            )}
        </div>
    );
};

export default Course;
