import React, { useContext } from 'react'
import { myContext } from '../../context/myContext';
import { Link } from 'react-router-dom';

import './Destionation_Page.css'

function Destionation_Page(props) {
  const { destinations } = useContext(myContext)
  
  const findDestionation = () => {
    const destionationID = props.match.params.id;
    const destination = destinations.find((destination) => destination.id === destionationID)
    return destination;
  }

  const renderdDestionation = () => {
      const destionation = findDestionation();
      return (
        <div className="destination-container">
          <div className="destination-box">
            <div className="destination-imgBox">
              <img src={destionation.image} alt="" />
            </div>
            <div className="destination-info">
              <div className="destination-title">
                <h1>{destionation.name}</h1>
              </div>
              <div className="destination-description">
                <p>
                  {destionation.description}
                </p>
              </div>
            </div>
          </div>
          <div className="destination-buttons">
            <Link to={`/`}><button>Back</button></Link>
          </div>
        </div>
      );
    }
  

    return (
      <div className="destination-main">
        {renderdDestionation()}
      </div>
    )
  
}

export default Destionation_Page