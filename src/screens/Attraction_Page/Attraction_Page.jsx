import React, { useContext } from 'react'
import { myContext } from '../../context/myContext';
import { Link } from 'react-router-dom';

import './Attraction_Page.css'

function Attraction_Page(props) {
  const { attractions } = useContext(myContext)
  
  const findAttraction = () => {
    const attractionID = props.match.params.id;
    const attraction = attractions.find((attraction) => attraction.id === attractionID)
    return attraction;
  }

  const renderdAttraction = () => {
      const attraction = findAttraction();
      return (
        <div className="attraction-container">
          <div className="attraction-box">
            <div className="attraction-imgBox">
              <img src={attraction.image} alt="" />
            </div>
            <div className="attraction-info">
              <div className="attraction-title">
                <h1>{attraction.name}</h1>
              </div>
              <div className="attraction-description">
                <p>
                  {attraction.description}
                </p>
              </div>
            </div>
          </div>
          <div className="attraction-buttons">
            <Link to={`/`}><button>Back</button></Link>
          </div>
        </div>
      );
    }
  

    return (
      <div className="attraction-main">
        {renderdAttraction()}
      </div>
    )
  
}

export default Attraction_Page;