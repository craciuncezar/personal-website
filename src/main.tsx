import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { registerSW } from 'virtual:pwa-register';
import { App } from './App';
import './styles.css';

registerSW();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
);
