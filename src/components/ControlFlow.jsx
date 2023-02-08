import { createSignal, Show } from "solid-js";
function ControlFlow() {
  const [loggedIn, setLoggedIn] = createSignal(true);
  const toggle = () => setLoggedIn(!loggedIn());
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);
  const [x] = createSignal(1);
  const RedThing = () => <strong style="color: red">Red Thing</strong>;
  const GreenThing = () => <strong style="color: green">Green Thing</strong>;
  const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

  const options = {
    red: RedThing,
    green: GreenThing,
    blue: BlueThing,
  };
  const [selected, setSelected] = createSignal("red");

  return (
    <div>
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>Some text you might need for something or other.</p>
        </div>
      </Portal>

      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={5 > x()}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
      {/* <Dynamic component={options[x()]} /> */}

      <For each={cats()}>
        {(cat, i) => (
          <li>
            {i() + 1}: {cat.name}
          </li>
        )}
      </For>
      <Show
        when={loggedIn()}
        fallback={<button onClick={toggle}>Log in</button>}
      >
        <button onClick={toggle}>Log out</button>
      </Show>
    </div>
  );
}

export default ControlFlow;
