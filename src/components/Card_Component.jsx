import React from 'react'

function Card_Component(props) {
  return (
    <article>
        <header className='card'><img  src={props.dataImg}/></header>
        <h3>Name: {props.dataName}</h3> 
        <footer className='footer'>{`type: ${props.dataType}`}</footer>
    </article>
  )
}

export default Card_Component