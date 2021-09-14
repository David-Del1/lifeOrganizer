import moment from 'moment';
import React, { useState } from 'react';
import { FaCalendarAlt, FaProjectDiagram, FaRegListAlt } from 'react-icons/fa';
import { useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';
import ProjectOverlay from './ProjectOverlay';
import TaskDate from './TaskDate';

function AddTask({ showAddTaskMain = true, 
  showShouldMain = false, 
  showQuickAddTask, setShowQuickAddTask }) {

    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(showShouldMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectValue();

    const addTask = () => {
      const projectId = project || selectedProject;
      let collatedDate = '';

      if (projectId === 'TODAY') {
        collatedDate = moment().format('DD/MM/YYYY');
      } else if (projectId === 'NEXT_7') {
        collatedDate = moment()
          .add(7, 'days')
          .format('DD/MM/YYYY');
      }

      return (
        task &&
        projectId &&
        firebase
          .firestore()
          .collection('tasks')
          .add({
            archived: false,
            projectId,
            task,
            date: collatedDate || taskDate,
            userId: '1',
          })
          .then(() => {
            setTask('');
            setProject('')
            setShowMain('');
            setShowProjectOverlay(false);
          })
      )
    }

  return (
    <div className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}>
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Quick Add Task</h2>
                <span 
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                >
                  X
                </span>
              </div>
            </>
          )}
          <ProjectOverlay 
            setProject={setProject} 
            showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            type="text"
            className="add-task__content"
            data-testid="add-task-content"
            onChange={e => setTask(e.target.value)}
          />
          <button
            type="button"
            className="add-task__submit"
            data-testid="add-task"
            onClick={() => addTask()}
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span 
              className="add-task__cancel"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
              >
                Cancel
            </span>
          )}
          <span 
            className="add-task__project"
            data-testid="show-project-overlay"
            onClick={() => setShowProjectOverlay(!showProjectOverlay)}
          >
            <FaRegListAlt />
          </span>
          <span
            className="add-task__date"
            data-testid="show-task-date-overlay"
            onClick={() => setShowTaskDate(!showTaskDate)}
          >
            <FaCalendarAlt />
          </span>
        </div>
      )}
    </div>
  );
}

export default AddTask;