import React, { useState } from 'react';
import { useProjectsValue } from '../context';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';

function AddProject({ shouldShow = false }) {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: '1'
      })
      .then(() => {
        setProjects([]);
        setProjectName('');
        setShow(false);
      });

  return (
    <div className="add-project">
      {show && (
        <div className="add-project__input">
          <input type="text"
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
        <span className="add-project__plus">+</span>
        <span
          data-testid="add-project-action"
          className="add-project__text"
          onClick={() => setShow(!show)}
        >
          Add Project
        </span>
    </div>
  )
}

export default AddProject;
