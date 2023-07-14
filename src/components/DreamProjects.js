import React from 'react';

function DreamProjects() {
    const projects = [
        {
            name: 'Project A',
            description: 'This is the description for Project A.',
        },
        {
            name: 'Project B',
            description: 'This is the description for Project B.',
        },
        {
            name: 'Project C',
            description: 'This is the description for Project C.',
        },
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2 data-ns-test="project-name">{project.name}</h2>
                    <p data-ns-test="project-description">{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default DreamProjects;
