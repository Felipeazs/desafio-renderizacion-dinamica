import React from 'react';

const ejercicio1 = () => {
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
		<div>
			<ul className='center'>{listaColores}</ul>
		</div>
	);
};

export default ejercicio1;
