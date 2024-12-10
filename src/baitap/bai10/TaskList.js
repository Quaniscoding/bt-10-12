import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, projectId, updateTaskStatus }) => {
    return (
        <div>
            <h3>Danh sách nhiệm vụ</h3>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        projectId={projectId}
                        updateTaskStatus={updateTaskStatus}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
