import React from 'react';
import ToDoContext from './ToDoContext';
 
const Form = () => {
    return (
        <div className="todo-form">
            <ToDoContext.Consumer>
                {({state, actions}) => (
                    <React.Fragment>
                        <form onSubmit={actions.handleFormSubmit}>
                            <label>Todos</label>
                            <br/>
                            <input type="text" value={state.task} onChange={actions.handleTaskChange} placeholder="Things to do..." />
                            <br/>
                            <button>Create Task</button>
                        </form>
                        <button onClick={actions.clearTasks} id="clear">Clear Completed Todos</button>
                    </React.Fragment>
                )}
            </ToDoContext.Consumer>
        </div>
    );  
};
 
export default Form;