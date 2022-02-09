import React from 'react';

import './NewTaskInput.css';

const newTaskInput = (props) => (
    <form className="new-task-form" onSubmit={props.submitTaskHandler}>
        <div className="add-icon">
        </div>
        <div className="new-task-field-container">
            <input
                className="new-task-field"
                type="text"
                value={props.newTaskDescription}
                onChange={props.newTaskChangeHandler} />
        </div>
    </form>
);

export default newTaskInput;