import React from 'react';

import Task from '../Task/Task';

const incompleteTasks = (props) => {
    return props.tasks.map((elem, index) => 
        <Task
            key={index}
            index={index}
            taskCheckedHandler={props.taskCheckedHandler}
            deleteTaskHandler={props.deleteTaskHandler}
            submittedTaskChangeHandler={props.submittedTaskChangeHandler}>
            {elem.description}
        </Task>
    );
}

export default incompleteTasks;