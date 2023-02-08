import DisplayName from "./DisplayName";
import stylesC from '../Custom.css';
function HelloWorld() {
  var name = "Nagarjuna Sanam";
  console.log("hello world");
  return (
    <div class={stylesC.hello}>
      <h1>Hello World</h1>
      <p>{name}</p>
  

      <DisplayName name="Solid Js" />
    </div>
  );
}

export default HelloWorld;
