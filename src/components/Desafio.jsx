import React, { useState } from 'react';

import { Stack, Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

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
		if (!newValue) {
			setNombreBuscado(event.target.value);
		} else {
			setNombreBuscado(newValue);
		}
	};

	const buscadorSubmitHandler = (event) => {
		event.preventDefault();
		setError(false);

		if (nombreBuscado.trim().length === 0) {
			setError(true);
			return setMensaje('Debe ingresar el nombre del colaborador');
		}

		const filtradoLista = colaboradores.filter((e) => e.nombre === nombreBuscado);

		if (filtradoLista.length === 0) {
			setError(true);
			return setMensaje('El colaborador buscado no existe');
		}

		setListadoColaboradores(filtradoLista);
	};

	const listado = listadoColaboradores.map((colaborador) => {
		return (
			<TableRow
				key={colaborador.id}
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			>
				<TableCell>{colaborador.nombre}</TableCell>
				<TableCell>{colaborador.correo}</TableCell>
			</TableRow>
		);
	});

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
				<Stack
					component='form'
					noValidate
					autoComplete='off'
					onSubmit={buscadorSubmitHandler}
				>
					<Autocomplete
						freeSolo
						disableClearable
						value={nombreBuscado}
						onChange={buscadorChangeHandler}
						options={colaboradores.map((el) => el.nombre)}
						renderInput={(params) => (
							<Stack
								sx={{
									'& > :not(style)': { m: 1 },
									width: '35ch',
								}}
							>
								<TextField
									{...params}
									label='Buscar nombre de colaborador'
									onChange={buscadorChangeHandler}
								/>
								<Button
									variant='contained'
									type='submit'
								>
									BUSCAR
								</Button>
							</Stack>
						)}
					/>
				</Stack>

				{error && <p className='errorText'>{mensaje}</p>}

				<Stack
					component='form'
					sx={{
						'& > :not(style)': { m: 1 },
						width: '35ch',
					}}
					noValidate
					autoComplete='off'
					onSubmit={submitAgregarHandler}
				>
					<TextField
						id='nombre'
						label='Nombre'
						value={nombre}
						onChange={nombreChangeHandler}
					/>
					<TextField
						id='nombre'
						label='Correo'
						value={correo}
						onChange={correoChangeHandler}
					/>
					<Button
						variant='contained'
						type='submit'
					>
						AGREGAR COLABORADOR
					</Button>
				</Stack>
			</Stack>

			<TableContainer
				component={Paper}
				sx={{ width: 650 }}
			>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell>Correo</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{listado}</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Desafio;
