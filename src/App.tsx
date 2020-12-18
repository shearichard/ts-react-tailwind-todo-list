import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


const initialTodos: Todo[] = [
  {
    text: 'Weed the garden',
    complete: false,
  },
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: false,
  },
];


function App() {
 const [todos, setTodos] = useState(initialTodos);

 const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

 const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

 return( 
    <>
    <div className="container mx-auto bg-green-800 p-5">
        <nav className="flex justify-between">
            <div>
                <h5 className="text-lg text-gray-100 dark:text-white">Todos using TS/React and Tailwind CSS</h5>
            </div>
        </nav>
    </div>
    <div className="h-64 grid grid-cols-3 gap-4">
     <div>&nbsp;</div>
     <div>&nbsp;</div>
     <div>&nbsp;</div>
     <div>&nbsp;</div>
     <div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
     </div>
     <div>&nbsp;</div>
     <div>&nbsp;</div>
     <div>
        <AddTodoForm addTodo={addTodo} />
     </div>
     <div>&nbsp;</div>
    </div>
    </>
    );


}

export default App;
