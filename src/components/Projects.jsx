import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import ProjectItem from './ProjectItem';

export function Projects({ activeValue = null }) {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        className={
          active === project.projectId
          ? 'active sidebar__project'
          : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <ProjectItem project={project} />
      </li>
    ))
  )
}
