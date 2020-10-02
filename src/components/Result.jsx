import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) => {
const {value}=props
console.log("renderizacion de result",props)
    
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes= {
    value: PropTypes.string.isRequired
}

//en caso de que no sea un string por defecto tira el valor:"que"
Result.defaultProps = {
    value:"0"
}


export default Result

