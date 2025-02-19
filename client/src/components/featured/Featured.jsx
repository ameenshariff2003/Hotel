import useFetch from '../hooks/useFetch.js'
import './featured.scss'
import React from 'react'
   
const Featured = () => {

    const {data,loading,error} = useFetch("http://localhost:8000/server/hotels/countbycity?city=delhi,mumbai,banglore")
  return (
    <div className="featured">
        {loading ? 
        ("Loading pleas wait")
        :<><div className="featuredCard">
            <img src="https://i.pinimg.com/736x/9b/d7/e6/9bd7e66617be23854757e8b64a8668dc.jpg" alt="img" className="featuredCardImg" />
            <div className="cardTitle">
                <h1>Delhi</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredCard">
            <img src="https://i.pinimg.com/736x/7b/a0/ed/7ba0ed6463fd94039da67867fcca4ce3.jpg" alt="img" className="featuredCardImg" />
            <div className="cardTitle">
                <h1>Mumbai</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div><div className="featuredCard">
            <img src="https://i.pinimg.com/736x/91/da/f9/91daf9b404850f7faa1339198f9c3701.jpg" alt="img" className="featuredCardImg" />
            <div className="cardTitle">
                <h1>Bengaluru</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>}
    </div>
  )
}

export default Featured
