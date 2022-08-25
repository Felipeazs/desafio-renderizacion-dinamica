import React from 'react';

import { Stack } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Buscador = (props) => {
	return (
		<div>
			<Stack
				component='form'
				noValidate
				autoComplete='off'
				onSubmit={props.onSubmit}
			>
				<Autocomplete
					freeSolo
					disableClearable
					onChange={props.onChange}
					value={props.value}
					options={props.colaboradores.map((el) => el.nombre)}
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
								onChange={props.onChange}
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
		</div>
	);
};

export default Buscador;
