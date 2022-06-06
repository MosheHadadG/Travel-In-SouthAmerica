import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import './CardAttractions.css'

function CardAttractions({ attractions }) {



  const renderedCards = useMemo(() => attractions.map(({ name, image, id }) => (

    <div key={id} className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-name">
        <h1>{name}</h1>
      </div>
      <Link to={`/attraction/${id}`}><button className='button-see-more'>More Info</button></Link>
    </div>
  )), [attractions]);

  return (
    <div className="cards">
      {renderedCards}
    </div>

  )
}

export default CardAttractions;