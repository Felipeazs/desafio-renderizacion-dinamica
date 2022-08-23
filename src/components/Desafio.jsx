import React, { useState } from 'react';

import colaboradores from '../models/colaboradores';

const Desafio = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');

	const nombreChangeHandler = (event) => {
		setNombre(event.target.value);
	};
	const correoChangeHandler = (event) => {
		setCorreo(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const colaborador = {
			nombre,
			correo,
		};

		console.log(colaborador);

		setNombre('');
		setCorreo('');
	};

	const listaColaboradores = colaboradores.map((colaborador) => {
		return (
			<tr key={colaborador.id}>
				<td>{colaborador.nombre}</td>
				<td>{colaborador.correo}</td>
			</tr>
		);
	});

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='nombre'
					value={nombre}
					onChange={nombreChangeHandler}
				/>
				<input
					type='text'
					placeholder='correo'
					value={correo}
					onChange={correoChangeHandler}
				/>
				<button type='submit'>AGREGAR</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>correo</th>
					</tr>
				</thead>
				<tbody>{listaColaboradores}</tbody>
			</table>
		</div>
	);
};

export default Desafio;
