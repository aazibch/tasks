import React, { Component } from 'react';

import NewTaskInput from '../../components/Tasks/NewTaskInput/NewTaskInput';
import IncompleteTasks from '../../components/Tasks/IncompleteTasks/IncompleteTasks';
import CompletedTasks from '../../components/Tasks/CompletedTasks/CompletedTasks';

class ToDoList extends Component {
    state = {
        incompleteTasks: [],
        completedTasks: [],
        tasksNumber: 0,
        newTaskDescription: "",
        hideCompletedTasks: false
    }

    newTaskChangeHandler = (event) => {
        this.setState({newTaskDescription: event.target.value});
    }

    submitTaskHandler = (event) => {
        event.preventDefault();
        
        if (this.state.newTaskDescription.trim() !== "") {
            const updatedIncompleteTasks = [...this.state.incompleteTasks];

            updatedIncompleteTasks.push({
                position: this.state.tasksNumber,
                description: this.state.newTaskDescription
            });
    
            this.setState((prevState, props) => {
                return {
                    incompleteTasks: updatedIncompleteTasks,
                    tasksNumber: prevState.tasksNumber + 1,
                    newTaskDescription: ""
                }
            });
        }
    }

    taskCheckedHandler = (index) => {
        const updatedIncompleteTasks = [...this.state.incompleteTasks];
        const updatedCompletedTasks = [...this.state.completedTasks];

        updatedCompletedTasks.push(this.state.incompleteTasks[index]);
        updatedCompletedTasks.sort((a, b) => a.position - b.position);
        updatedIncompleteTasks.splice(index, 1);

        this.setState({
            incompleteTasks: updatedIncompleteTasks,
            completedTasks: updatedCompletedTasks
        })
    }

    taskUncheckedHandler = (index) => {
        const updatedCompletedTasks = [...this.state.completedTasks];
        const updatedIncompleteTasks = [...this.state.incompleteTasks];
        
        updatedIncompleteTasks.push(updatedCompletedTasks[index]);
        updatedCompletedTasks.splice(index, 1);
        updatedIncompleteTasks.sort((a, b) => a.position - b.position);

        this.setState({
            incompleteTasks: updatedIncompleteTasks,
            completedTasks: updatedCompletedTasks
        });
    }

    deleteTaskHandler = (index, completedTask) => {
        if (completedTask) {
            const updatedCompletedTasks = [...this.state.completedTasks];

            updatedCompletedTasks.splice(index, 1);

            this.setState({
                completedTasks: updatedCompletedTasks
            });
        } else {
            const updatedIncompleteTasks = [...this.state.incompleteTasks];

            updatedIncompleteTasks.splice(index, 1);

            this.setState({
                incompleteTasks: updatedIncompleteTasks
            });
        }
    }

    submittedTaskChangeHandler = (event, index, completedTask) => {
        if (completedTask) {
            const updatedCompletedTasks = [...this.state.completedTasks];

            updatedCompletedTasks[index] = {...this.state.completedTasks[index]};
            updatedCompletedTasks[index].description = event.target.value;

            this.setState({completedTasks: updatedCompletedTasks});
        } else {
            const updatedIncompleteTasks = [...this.state.incompleteTasks];

            updatedIncompleteTasks[index] = {...this.state.incompleteTasks[index]};
            updatedIncompleteTasks[index].description = event.target.value;

            this.setState({
                incompleteTasks: updatedIncompleteTasks
            })
        }
    }

    toggleCompletedTasksHandler = () => {
        this.setState((prevState) => {
            return {
                hideCompletedTasks: !prevState.hideCompletedTasks
            }
        });
    }

    render() {
        let completedTasks = null;

        if (this.state.completedTasks.length > 0) {
            completedTasks = <CompletedTasks
                tasks={this.state.completedTasks}
                hideCompletedTasks={this.state.hideCompletedTasks}
                numOfCompletedTasks={this.state.completedTasks.length}
                taskUncheckedHandler={this.taskUncheckedHandler}
                deleteTaskHandler={this.deleteTaskHandler}
                submittedTaskChangeHandler={this.submittedTaskChangeHandler}
                toggleCompletedTasksHandler={this.toggleCompletedTasksHandler} />
        }

        return (
            <React.Fragment>
                <IncompleteTasks
                    tasks={this.state.incompleteTasks}
                    taskCheckedHandler={this.taskCheckedHandler}
                    deleteTaskHandler={this.deleteTaskHandler}
                    submittedTaskChangeHandler={this.submittedTaskChangeHandler} />
                <NewTaskInput
                    newTaskChangeHandler={this.newTaskChangeHandler}
                    submitTaskHandler={this.submitTaskHandler}
                    newTaskDescription={this.state.newTaskDescription} />
                {completedTasks}
            </React.Fragment>
        );
    }
}

export default ToDoList;