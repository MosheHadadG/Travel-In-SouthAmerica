import React from 'react'
import { Link } from 'react-router-dom';
import './CardDestionations.css'
import './DestionationsResponsive.css'

function CardDestionations({ destinations }) {


  const renderedCards = destinations.map(({ name, image, id }) => {
    return (
      <div key={id} className="card">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="card-name">
          <h1>{name}</h1>
        </div>
        <Link to={`/destionation/${id}`}><button className='button-see-more'>More Info</button></Link>
      </div>
    );
  });

  return (
    <div className="cards">
      {renderedCards}
    </div>

  )
}

export default CardDestionations