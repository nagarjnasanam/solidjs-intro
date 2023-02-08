import { render } from "solid-js/web";
import { createSignal, createEffect, createMemo } from "solid-js";

function Memo() {
  const [count, setCount] = createSignal(19);
  const increment = () => setCount((c) => c + 1);

  createEffect(() => {
    console.log("Count Changed", count());
  });

  const value = createMemo(() => count() * count());
  console.log("Value", value());

  return (
    <div>
      <h1>{count()}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Memo