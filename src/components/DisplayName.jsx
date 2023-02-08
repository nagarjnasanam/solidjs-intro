import { createSignal } from "solid-js";
function DisplayName(props) {
  
var red='green'
  return (
    <div>
      <p>{props.name}</p>

      <div
        style={{
          color: red
        }}
      >
        Some Text
      </div>
    </div>
  );
}

export default DisplayName;
