import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import colaboradores from '../models/colaboradores';
import { Stack } from '@mui/system';

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

	const buscadorChangeHandler = (event, newValue) => {
		if (!newValue) {
			setNombreBuscado(event.target.value);
		} else {
			setNombreBuscado(newValue);
		}
	};

	const buscadorSubmitHandler = (event) => {
		event.preventDefault();

		if (nombreBuscado.trim().length === 0)
			return alert('Debe ingresar el nombre del colaborador');

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
			<Stack
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				onSubmit={buscadorSubmitHandler}
			>
				<Autocomplete
					freeSolo
					disableClearable
					value={nombreBuscado}
					onChange={buscadorChangeHandler}
					options={listadoColaboradores.map((el) => el.nombre)}
					renderInput={(params) => (
						<div>
							<TextField
								{...params}
								label='Buscador'
								onChange={buscadorChangeHandler}
							/>
							<Button
								variant='contained'
								type='submit'
							>
								BUSCAR
							</Button>
						</div>
					)}
				/>
			</Stack>

			<Stack
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				onSubmit={submitAgregarHandler}
			>
				<TextField
					id='outlined-name'
					label='Nombre'
					value={nombre}
					onChange={nombreChangeHandler}
				/>
				<TextField
					id='outlined-uncontrolled'
					label='Correo'
					value={correo}
					onChange={correoChangeHandler}
				/>
				<Button
					variant='contained'
					type='submit'
				>
					AGREGAR
				</Button>
			</Stack>
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
