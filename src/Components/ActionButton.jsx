import React from 'react'

const ActionButton = (props) => {
    return(
        <div className='actionButton' onClick={props.handleClick}>
            <span>{props.name}</span>
        </div>
        
    )
}

export default ActionButton;