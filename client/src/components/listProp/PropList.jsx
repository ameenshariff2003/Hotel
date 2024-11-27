import React from 'react'
import './propList.scss'
import useFetch from '../hooks/useFetch'

const PropList = () => {
    const {data,loading,error} = useFetch("http://localhost:8000/server/hotels/countbytype")

const photos = [

"https://i.pinimg.com/736x/44/e3/a8/44e3a83aa13a473c71ccc3d4969a1fb8.jpg",
"https://i.pinimg.com/736x/23/ef/1d/23ef1d5d3fe4ba6268bafe0b5445171f.jpg",
"https://i.pinimg.com/736x/d7/78/59/d77859a1502451bcce5154e6027a8bf5.jpg",
"https://i.pinimg.com/736x/5e/63/b7/5e63b7c89c612ad7e91079281a3723f3.jpg",
"https://i.pinimg.com/736x/3d/6f/23/3d6f23c70a7da2d18657b358f4e5b286.jpg"


]
if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }
  if (loading) {
    return <div>Loading, please wait...</div>;
}



if (!data || data.length === 0) {
    return <div>No properties found.</div>;
}

  return (
    <div className='propL'> 
    {loading ? 
    ("loading pleas wait ")
    :
    (<>{data && photos.map((pho,i)=>(<div className="propItem" key={i}>
        <img src={photos[i]} alt="" className="propImg" />
        <div className="propTitle">
            <h1>{data[i]?.type}</h1>
            <h2 className='detailsP'> {data[i]?.count} {data[i]?.type} Available</h2>
        </div>
   
    </div>
    ))
    }
    </>
    )
    }
      
    </div>
  )
}

export default PropList
