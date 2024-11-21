import Email from '../../components/email/Email'
import Featured from '../../components/featured/Featured'
import FeaturedHotels from '../../components/featuredHotels/FeaturedHotels'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import PropList from '../../components/listProp/PropList'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="homeWrapper">
    <Featured/>
    <h1 className="homeTitle">
      Browse by City Name
    </h1>
    <PropList/>
    <h1 className="homeTitle">
    Preferred by Guests
    </h1>
    <FeaturedHotels/>
    <Email/>
    <Footer/>



    </div>

    
    
      
    </div>
  )
}
