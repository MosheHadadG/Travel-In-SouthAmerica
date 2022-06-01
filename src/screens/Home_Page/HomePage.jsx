import Weather from '../../components/Weather/Weather'
import Destionations from '../../components/Destionations/Destionations'
import Attractions from '../../components/Attractions/Attractions'


import './HomePage.css'


function HomePage() {

  return (
    <div className='home-page-container'>

      <Weather />
      <Destionations />
      <Attractions />

    </div>
  )
}

export default HomePage