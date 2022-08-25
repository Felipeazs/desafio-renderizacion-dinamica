import React from 'react';

import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NuevoColaborador = (props) => {
	return (
		<div>
			<Stack
				component='form'
				sx={{
					'& > :not(style)': { m: 1 },
					width: '35ch',
				}}
				noValidate
				autoComplete='off'
				onSubmit={props.onSubmit}
			>
				<TextField
					id='nombre'
					label='Nombre'
					value={props.nombre}
					onChange={props.nombreChangeHandler}
				/>
				<TextField
					id='nombre'
					label='Correo'
					value={props.correo}
					onChange={props.correoChangeHandler}
				/>
				<Button
					variant='contained'
					type='submit'
				>
					AGREGAR COLABORADOR
				</Button>
			</Stack>
		</div>
	);
};

export default NuevoColaborador;
