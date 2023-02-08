import { For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";


const Todo = () => {
  const [todos, setTodos] = createStore([])
//   const [todos, setTodos] = createSignal([])
  let input;
  let todoId = 0;

  const addTodo = (text) => {
    // setTodos([...todos(), { id: ++todoId, text, completed: false }]);
    setTodos([...todos, { id: ++todoId, text, completed: false }]);

  }
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    )));
  }

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`)
          return <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onchange={[toggleTodo, id]}
            />
            <span
              style={{ "text-decoration": todo.completed ? "line-through" : "none"}}
            >{text}</span>
          </div>
        }}
      </For>
    </>
  );
};

export default Todo
