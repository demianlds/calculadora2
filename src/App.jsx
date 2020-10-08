import React, { useState } from 'react'
import words from 'lodash.words'
import Clock from './components/Clock'
import Function from './components/Function'
import MathOperation from './components/MathOperation'
import Numbers from './components/Numbers'
import Result from './components/Result'
import ResultArea from './components/ResultArea'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
	//el use state le pasas dos parametros,el primero seria el valor y el segundo la funcion
	const [texto, funcionModificaTexto] = useState('')

	//usamos lodash para separar los items de las operaciones
	const items = words(texto, /[^-^+^*^/]+/g)

	// Lo que ejecuta la función
	console.log('Renderización de App')
	return (
		<main style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<div style={{ padding: 16 }}>
				<Clock />
                {/* if(items[items.length - 1])   
                    return <ResultArea valor={items[items.length - 1]} /> */}
				{items[items.length - 1] && <ResultArea valor={items[items.length - 1]} />}
			</div>
			<div className="react-calculator">
				<Result value={items[items.length - 1]} />
				<Numbers
					onClickNumber={(number) => {
						console.log('Click en number', number)
						//interpolacion
						funcionModificaTexto(`${texto}${number}`)
					}}
				/>
				<Function
					onContentClear={() => {
						console.log('Content Clear')
						//para borrar llamamos a la funcion vacia
						funcionModificaTexto('')
					}}
					onDelete={() => {
						//borrar UN solo caracter
						if (texto.length > 0) {
							const borraUnoSolo = texto.substring(0, texto.length - 1)
							funcionModificaTexto(borraUnoSolo)
							console.log('onDelete')
						}
					}}
				/>
				<MathOperation
					onClickOperation={(operation) => {
						console.log('Operation', operation)
						funcionModificaTexto(`${texto}${operation}`)
					}}
					onClickEqual={(tocasteigual) => {
						console.log('Operation', tocasteigual)
						funcionModificaTexto(eval(texto).toString())
					}}
				/>
			</div>
		</main>
	)
}

export default App
