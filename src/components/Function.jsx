import React from "react"
import PropTypes from 'prop-types'
import Button from "./Button"

const Function = ({onContentClear,onDelete})=> (
    <div className="function">
        <Button text="clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete} />
    </div>
)




    Function.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
}

export default Function

