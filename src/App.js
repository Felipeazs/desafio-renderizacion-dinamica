import './App.css';

function App() {
	const colores = ['blue', 'yellow', 'red', 'green'];
	const listaColores = colores.map((color) => (
		<li
			style={{ color }}
			key={color}
		>
			{color}
		</li>
	));

	return (
		<div className='App'>
			<ul className='center'>{listaColores}</ul>
		</div>
	);
}

export default App;
