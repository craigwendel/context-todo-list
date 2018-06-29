import React from 'react';
import ToDoContext from './ToDoContext';
 
const ListItem = () => {
    return (
        <div className="todo-items">
            <ul>
                <ToDoContext.Consumer>
                    {({state, actions}) =>
                        (state.todos.length === 0) ? <h3>There are no Todos yet! Enter some tasks above!</h3>
                        : state.todos.map((todo, index) => 
                        (todo.completed === true) ? <li onClick={() => actions.toggleTask(index)} style={completedTaskStyle} key={index}>{todo.description}</li>
                        : <li key={index} onClick={() => actions.toggleTask(index)}>{todo.description}</li>
                        )
                    }
                </ToDoContext.Consumer>
            </ul>
        </div>
    );
};
 
const completedTaskStyle = {
    textDecoration: 'line-through',
    color: 'red',
    fontStyle: 'italic'
};
 
export default ListItem;