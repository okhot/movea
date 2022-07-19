import React from 'react'

function Cards(props) {
  return (
   <div className='card'>
    <div className='card__body'>
        <img src={props.img} />
    <h2 className="card__title">{props.title}</h2>
    <p className="card__">{props.description}</p>
    </div>
    <button className='card__button'>Watch More</button>
   </div>
  )
}

export default Cards

