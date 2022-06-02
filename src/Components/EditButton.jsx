import React from 'react'

const EditButton = (props) => {
    return(
        <div className='editButton' onClick={props.handleClick}>
            <span>{props.name}</span>
        </div>
        
    )
}

export default EditButton;