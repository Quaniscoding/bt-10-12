import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectName.trim() !== '') {
            const newProject = {
                id: Date.now(),
                name: projectName,
                tasks: [],
            };
            addProject(newProject);
            setProjectName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Tên dự án"
            />
            <button type="submit">Tạo Dự Án</button>
        </form>
    );
};

export default ProjectForm;
