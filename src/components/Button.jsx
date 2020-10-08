// importar React
import React from 'react'

// Componente Funcional
const Button = ({ type, text, clickHandler, estilo }) => {
	return (
		<button className={type} style={estilo} onClick={() => clickHandler(text)}>
			<span>{text}</span>
		</button>
	)
}

export default Button
