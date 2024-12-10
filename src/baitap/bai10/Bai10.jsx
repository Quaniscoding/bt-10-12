import React, { useEffect, useState } from 'react'
import ProjectForm from './ProjectForm';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './bai10.css'
export default function Bai10() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = JSON.parse(localStorage.getItem('projects'));
        return savedProjects || [];
    });

    // Cập nhật lại localStorage khi dữ liệu thay đổi
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = (project) => {
        setProjects([...projects, project]);
    };

    const addTask = (projectId, task) => {
        const updatedProjects = projects.map((project) =>
            project.id === projectId
                ? { ...project, tasks: [...project.tasks, task] }
                : project
        );
        setProjects(updatedProjects);
    };

    const updateTaskStatus = (projectId, taskId, status) => {
        const updatedProjects = projects.map((project) =>
            project.id === projectId
                ? {
                    ...project,
                    tasks: project.tasks.map((task) =>
                        task.id === taskId ? { ...task, status } : task
                    ),
                }
                : project
        );
        setProjects(updatedProjects);
    };
    return (
        <div className='bai10'>
            <h1>Ứng Dụng Quản Lý Công Việc Nhóm</h1>
            <ProjectForm addProject={addProject} />
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <TaskForm projectId={project.id} addTask={addTask} />
                    <TaskList
                        tasks={project.tasks}
                        projectId={project.id}
                        updateTaskStatus={updateTaskStatus}
                    />
                </div>
            ))}
        </div>
    )
}
