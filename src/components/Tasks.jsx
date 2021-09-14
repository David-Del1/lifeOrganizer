import React, { useEffect } from 'react';
import { useTasks } from '../hooks';
import Checkbox from './Checkbox';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { collatedTasksExists, getCollatedTitle, getTitle } from '../helpers';
import { collatedTasks } from '../constants';
import AddTask from './AddTask';

function Tasks() {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue()
  const { tasks } = useTasks(selectedProject);
  
  let projectName = '';

  if(collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExists(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`
  });

  console.log('tasks', tasks);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  )
}

export default Tasks;
