/* @refresh reload */
import { render } from 'solid-js/web';
import { CounterProvider } from "./components/contex/Incement";

import './index.css';
import App from './App';

render(() => 
<CounterProvider count={11111}>
    <App />
  </CounterProvider>,
   document.getElementById('root'));
