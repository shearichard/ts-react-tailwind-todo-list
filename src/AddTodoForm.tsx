import { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

/*
 1. Maintain internal `text` state using `useState`. This will allow us to maintain the state of the new todo item’s text.
 2. Bind `text` to the `input` value.
 3. Set text using `setText` in the input’s `onChange` handler. `e.target.value` contains the current value.
 4. Add an `onClick` handler to the submit button to submit the typed text.
 5. Make sure to cancel the default event of actually submitting the form.
 6. Add the todo using `addTodo` and passing it `text`.
 7. Clearing our form by setting `text` to an empty string.
*/

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {

  const [text, setText] = useState('');

  return (
    <form>
    <div>
      <input 
        type="text" 
        className="justify-self-center border border-gray-300 text-blue-dark font-semibold py-2 px-4 m-5 " 
        value={text}
        onChange={e => {
            setText(e.target.value);
        }}
      />
      <button 
        className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 m-1 border border-blue hover:border-transparent rounded"
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </div>
    </form>
  );
};
