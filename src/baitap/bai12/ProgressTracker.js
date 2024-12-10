import React, { useState } from 'react';

const ProgressTracker = ({ progress, onProgressChange }) => {
    const [newProgress, setNewProgress] = useState(progress);

    const handleChange = (e) => {
        const value = Math.min(Math.max(Number(e.target.value), 0), 100);
        setNewProgress(value);
        onProgressChange(value);
    };

    return (
        <div>
            <p>Tiến độ học: {newProgress}%</p>
            <input
                type="number"
                value={newProgress}
                onChange={handleChange}
                min="0"
                max="100"
            />
        </div>
    );
};

export default ProgressTracker;
