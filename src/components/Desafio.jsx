import React, { useState } from 'react';

import colaboradores from '../models/colaboradores';

const Desafio = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [listadoColaboradores, setListadoColaboradores] = useState(colaboradores);
	const [nombreBuscado, setNombreBuscado] = useState('');

	const nombreChangeHandler = (event) => {
		setNombre(event.target.value);
	};
	const correoChangeHandler = (event) => {
		setCorreo(event.target.value);
	};

	const submitAgregarHandler = (event) => {
		event.preventDefault();

		const colaborador = {
			id: Math.random(),
			nombre,
			correo,
		};

		colaboradores.push(colaborador);
		setListadoColaboradores(colaboradores);

		setNombre('');
		setCorreo('');
	};

	const buscadorChangeHandler = (event) => {
		setNombreBuscado(event.target.value);
	};

	const buscadorSubmitHandler = (event) => {
		event.preventDefault();

		if (nombreBuscado.trim().length === 0) return;

		const filtradoLista = colaboradores.filter((e) => e.nombre === nombreBuscado);

		if (filtradoLista.length === 0) {
			return alert(`No existe el colaborador ${nombreBuscado}`);
		}

		setListadoColaboradores(filtradoLista);
	};

	const listado = listadoColaboradores.map((colaborador) => {
		return (
			<tr key={colaborador.id}>
				<td>{colaborador.nombre}</td>
				<td>{colaborador.correo}</td>
			</tr>
		);
	});

	return (
		<div>
			<form onSubmit={buscadorSubmitHandler}>
				<input
					type='text'
					placeholder='buscador'
					onChange={buscadorChangeHandler}
					value={nombreBuscado}
				/>
				<button type='submit'>Buscar</button>
			</form>
			<form onSubmit={submitAgregarHandler}>
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
				<tbody>{listado}</tbody>
			</table>
		</div>
	);
};

export default Desafio;
