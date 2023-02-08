import { createSignal,createEffect } from "solid-js"

function HookExample(){
  const[names,setNames] = createSignal({name1:1,name2:2})
  

  createEffect(()=>{
    console.log('count',count())
  })
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  

    return(
        <div>
            <p>{names().name2}</p>
            <p>Names:{names().name1}</p>
            <button onClick={increment}>ChangeCount</button>
        </div>

    )
}

export default HookExample