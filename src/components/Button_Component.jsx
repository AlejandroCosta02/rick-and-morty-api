import React from 'react'

function Button_Component(props) {
  return (
    <div>
        <button  onClick={props.handleClick}>Random Character</button>
    </div>
  )
}

export default Button_Component