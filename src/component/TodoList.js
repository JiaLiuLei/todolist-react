import React from 'react';

function TodoList(props) {
    const { todos, onClick } = props;
    return (
        <ul>
            {
                todos.map( item => {
                    return (
                        <li
                        onClick={() =>
                            onClick(item.id)
                        }
                        style={{
                            textDecoration: item.completed
                            ? "line-through"
                            : "none"
                        }}
                        key={item.id}
                        >
                        {item.text}
                        </li>
                    );
                })
            }
        </ul>
    );
}


export default TodoList;