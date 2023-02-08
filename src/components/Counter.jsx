import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  console.log('hello')

  return (
  <div>
    <p>{count}</p>
      <button type="button" onClick={increment}>
      Increase
    </button>
    <p>{count() ** 2}</p>
  </div>
  );
}

export default Counter
