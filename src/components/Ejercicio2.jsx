import React, { useState } from 'react';

const Ejercicio2 = () => {
	const [nuevaTarea, setNuevaTarea] = useState('');
	const [tareas, setTareas] = useState([]);

	const submitHandler = (event) => {
		event.preventDefault();
		setTareas([nuevaTarea, ...tareas]);

		setNuevaTarea('');
	};
	const tareaChangeHandler = (event) => {
		setNuevaTarea(event.target.value);
	};

	const listaTareas = tareas.map((tarea) => <li key={Math.random()}>{tarea}</li>);

	return (
		<div className='center'>
			<form
				onSubmit={submitHandler}
				className='horizontal'
			>
				<input
					type='text'
					onChange={tareaChangeHandler}
					value={nuevaTarea}
				/>
				<button type='submit'>Guardar</button>
			</form>
			<ul>{listaTareas}</ul>
		</div>
	);
};

export default Ejercicio2;
