import React from 'react';

const TaskItem = ({ task, projectId, updateTaskStatus }) => {
    const handleStatusChange = (status) => {
        updateTaskStatus(projectId, task.id, status);
    };

    return (
        <li>
            <p>{task.name}</p>
            <p>Giao cho: {task.assignedTo}</p>
            <p>Trạng thái: {task.status}</p>
            <button onClick={() => handleStatusChange('Đang thực hiện')}>Đang thực hiện</button>
            <button onClick={() => handleStatusChange('Hoàn thành')}>Hoàn thành</button>
        </li>
    );
};

export default TaskItem;
