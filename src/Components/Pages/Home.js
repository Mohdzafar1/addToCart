import React from 'react'
import Cards from './Cards'
import "../Backend/Data"
import data from '../Backend/Data'

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="text-center text-info mt-5 text-uppercase display-6 fw-bold">SHOW PAGE</div>
    <div className="container py-5">
      <div className="row">
      {data.products.map((item,index)=>{
        return(
  <>
  <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />

  </>
        )
      })}
        
        
      </div>
    </div>  
      </div>
    </div>
  )
}

export default Home
