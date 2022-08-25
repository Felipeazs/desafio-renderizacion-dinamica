import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabla = (props) => {
	const listado = props.listadoColaboradores.map((colaborador) => {
		return (
			<TableRow
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				key={colaborador.id}
			>
				<TableCell>{colaborador.nombre}</TableCell>
				<TableCell>{colaborador.correo}</TableCell>
			</TableRow>
		);
	});
	return (
		<TableContainer
			component={Paper}
			sx={{ width: 450 }}
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
	);
};

export default Tabla;
