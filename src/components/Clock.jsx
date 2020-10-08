import React, { useEffect, useState } from 'react'

const Clock = (props) => {
	const [hora, setHora] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setHora(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div style={{ color: 'white' }}>
			<h1>{hora.toLocaleDateString()}</h1>
			<h2>Horario: {hora.toLocaleTimeString()}.</h2>
		</div>
	)
}

export default Clock
