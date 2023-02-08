import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import MainComponent from './components/Counter1'
import HookExample from './components/HookExample'
import Memo from './components/Memo';
import ControlFlow from './components/ControlFlow'
import Lifecycle from './components/Lifecycle'
import Todo from './components/Todo'
import CreateStore from './components/CreateStore'
import Nested from './components/contex/Nested';

function App() {
  return (
    <div class={styles.App}>
      <CreateStore />
      <Todo />
      <Lifecycle />
      <ControlFlow />
      <Memo />
      <HookExample />
      <Counter />
      <MainComponent />
      <header >
        <HelloWorld />
      </header>

      <div>
        <Nested />
      </div>
    </div>
  );
}

export default App;
