import React from 'react';

import Task from '../Task/Task';
import './CompletedTasks.css';

const completedTasks = (props) => {
    const arrowIconClasses = ["arrow-icon"];
    let toggleButtonDescription = props.numOfCompletedTasks + " completed task";
    let tasks = props.tasks.map((elem, index) =>
        <Task
            key={index}
            taskUncheckedHandler={props.taskUncheckedHandler}
            deleteTaskHandler={props.deleteTaskHandler}
            taskClickHandler={props.taskClickHandler}
            submittedTaskChangeHandler={props.submittedTaskChangeHandler}
            index={index}
            complete>
            {elem.description}
        </Task>
    );

    if (props.numOfCompletedTasks > 1) {
        toggleButtonDescription = props.numOfCompletedTasks + " completed tasks";
    }

    if (props.hideCompletedTasks) {
        arrowIconClasses.push("arrow-icon-toggled");
        tasks = null;
    }

    return (
        <div className="completed-tasks">
            <div className="toggle-completed-tasks-button" onClick={props.toggleCompletedTasksHandler}>
                <div className={arrowIconClasses.join(" ")}></div>
                {toggleButtonDescription}
            </div>
            {tasks}
        </div>
    )
};

export default completedTasks;