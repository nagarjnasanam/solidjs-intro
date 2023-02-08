import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

function MainComponent() {
  return (<>
    <CounterDisplay/>  
    <Counter/>
  </>);
}

function Counter() {
  const increment = () => setCount(count() + 1);

  return (<button type="button" onClick={increment}>
    Increment
  </button>);
}

function CounterDisplay() {
  return (<div>
    {count()}
  </div>);
}

export default MainComponent
