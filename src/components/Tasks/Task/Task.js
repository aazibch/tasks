import React, { Component } from 'react';

import './Task.css';

class Task extends Component {
    handleCheckClick = () => {
        this.props.taskCheckedHandler(this.props.index);
    }

    handleUncheckClick = () => {
        this.props.taskUncheckedHandler(this.props.index);
    }

    handleDeleteButtonClick = () => {
        this.props.deleteTaskHandler(this.props.index, this.props.complete);
    }

    handleTaskDescriptionChange = (event) => {
        this.props.submittedTaskChangeHandler(event, this.props.index, this.props.complete);
    }

    render() {
        let parentElementClasses = "task incomplete-task";
        let checkBox = <div className="checkbox" onClick={this.handleCheckClick}></div>;
    
        if (this.props.complete) {
            parentElementClasses = "task completed-task";
            checkBox = (
                <div className="checkbox" onClick={this.handleUncheckClick}></div>
            );
        }

        return (
            <div className={parentElementClasses}>
                {checkBox}
                <div className="task-description-container">
                    <input className="task-description-field" value={this.props.children} onChange={this.handleTaskDescriptionChange} />
                </div>
                <div className="delete-button" onClick={this.handleDeleteButtonClick}></div>
            </div>
        )
    }
}

export default Task;