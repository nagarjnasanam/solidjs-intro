import { createSignal, onMount,onCleanup } from "solid-js";
function Lifecycle() {
  const [photos, setPhotos] = createSignal([]);
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  setInterval(() => setCount(count() + 1), 1000);
  onMount(async () => {
    console.log("onMount.......................");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    console.log("photos", res);
    setPhotos(await res.json());
  });
  return (
    <div>
      <h1>solid js Lifecycle</h1>
      <div>Count: {count()}</div>
    </div>
  );
}

export default Lifecycle;
