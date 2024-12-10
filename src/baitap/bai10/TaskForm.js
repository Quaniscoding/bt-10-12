import React, { useState } from 'react';

const TaskForm = ({ projectId, addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [assignedTo, setAssignedTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && assignedTo.trim() !== '') {
            const newTask = {
                id: Date.now(),
                name: taskName,
                assignedTo: assignedTo,
                status: 'Đang thực hiện',
            };
            addTask(projectId, newTask);
            setTaskName('');
            setAssignedTo('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Tên nhiệm vụ"
            />
            <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="Thành viên giao nhiệm vụ"
            />
            <button type="submit">Thêm Nhiệm Vụ</button>
        </form>
    );
};

export default TaskForm;
