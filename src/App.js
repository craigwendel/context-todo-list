import React, { Component } from 'react';
import ToDoContext from './ToDoContext';
import './App.css';
import Form from './Form';
import ListItem from './ListItem';
 
class ToDoProvider extends Component {
    state = {
        todos: [
                {   
                    description: 'Learn React',
                    completed: true
                },
                {
                    description: 'Complete Apps!',
                    completed: false
                }
            ],
        task: '',
        actions: {
            handleTaskChange: (e) => {
                this.setState({task: e.target.value});
            },
            handleFormSubmit: (e) => {
                e.preventDefault();
                (this.state.task === '') ? alert("Please enter a task description!")
                : this.setState({
                        task: '',
                        todos: [
                            ...this.state.todos, 
                            {
                                description: this.state.task,
                                completed: false
                            }
                        ]
                    }
                );
            },
            toggleTask: (index) => {
                const todos = this.state.todos;
                let task = todos[index];
                task.completed = !task.completed;
                this.setState({todos: todos});
            },
            clearTasks: () => {
                const todos = this.state.todos;
                for (let i = todos.length; i--;) {
                    if (todos[i].completed === true) {
                        todos.splice(i, 1);
                    }
                }
                this.setState({todos: todos});
            }
        }
    }
 
    render() {
        return (
            <ToDoContext.Provider value={{state: this.state, actions: this.state.actions}}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}
 
class App extends Component {
    render() {
        return (
            <ToDoProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Craig's Todos</h1>
                    </header>
                    <div className="container">
                        <Form />
                        <ListItem />
                    </div>
                </div>
            </ToDoProvider>
        );
    }
}
 
export default App;