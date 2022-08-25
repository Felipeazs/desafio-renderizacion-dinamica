import React, { useState } from 'react';

import { Stack, Box } from '@mui/system';

import Tabla from './Tabla';
import Buscador from './Buscador';
import NuevoColaborador from './NuevoColaborador';

import colaboradores from '../models/colaboradores';

const Desafio = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [listadoColaboradores, setListadoColaboradores] = useState(colaboradores);
	const [nombreBuscado, setNombreBuscado] = useState('');
	const [error, setError] = useState(false);
	const [mensaje, setMensaje] = useState('');

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
		setError(false);
		if (!newValue) {
			setNombreBuscado(event.target.value);
		} else {
			setNombreBuscado(newValue);
		}
	};

	const buscadorSubmitHandler = (event) => {
		event.preventDefault();

		if (nombreBuscado.trim().length === 0) {
			setError(true);
			setMensaje('Debe ingresar el nombre del colaborador');
			return;
		}

		const filtradoLista = colaboradores.filter((e) => e.nombre === nombreBuscado);

		if (filtradoLista.length === 0) {
			setError(true);
			setMensaje('El colaborador buscado no existe');
			return;
		}

		setListadoColaboradores(filtradoLista);
	};

	return (
		<Box
			className='horizontal'
			sx={{
				m: 16,
			}}
		>
			<Stack
				sx={{
					m: 6,
				}}
			>
				<Buscador
					onSubmit={buscadorSubmitHandler}
					value={nombreBuscado}
					onChange={buscadorChangeHandler}
					colaboradores={colaboradores}
				/>
				{error && <p className='errorText'>{mensaje}</p>}
				<NuevoColaborador
					onSubmit={submitAgregarHandler}
					nombre={nombre}
					nombreChangeHandler={nombreChangeHandler}
					correo={correo}
					correoChangeHandler={correoChangeHandler}
				/>
			</Stack>
			<Tabla listadoColaboradores={listadoColaboradores} />
		</Box>
	);
};

export default Desafio;
