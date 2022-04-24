import React from 'react';
import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
/* ReactDOM.render(elemento, contenedor).
Renderiza un elemento React al DOM en el contenedor suministrado y retorna una referencia al componente (o devuelve null para componentes sin estado). */
/* This is how we render stuff with react. First of, we tell the function render what do we want to render, and then we say where do we want to render it. We do have a #root div in the main index.html file, so thats where we going to do it, but we dont want to just render an h1, we want our whole app (app component) to render there, so we set that. */
// ReactDOM.render(<h1>My App</h1>, document.getElementById('root'));
/* We are going to wrap our App component with React Strict Mode, which adds additional checks and warnings withing our applications. */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
/* ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
); */
