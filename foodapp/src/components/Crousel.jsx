import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Crousel() {
 
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='crousel'>
      
        
      
     <Carousel activeIndex={index} onSelect={handleSelect} style={{objectFit:"contain !important"}}>
      <Carousel.Item>
      <img class="d-block w-100 " src="https://source.unsplash.com/random/200×200/?burger" alt="Third slide" style={{height:"600px", filter:"brightness(30%)"}}/>
        <Carousel.Caption>
        <form className=" d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success text-white " type="submit" style={{marginLeft:"12px"}}>Search</button>
    </form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100 " src="https://source.unsplash.com/random/200×200/?fruit" alt="Third slide" style={{height:"600px", filter:"brightness(30%)"}}/>
        <Carousel.Caption>
        <form className=" d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success text-white " type="submit" style={{marginLeft:"12px"}}>Search</button>
    </form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://source.unsplash.com/random/200×200/?pizza" alt="Third slide"  style={{height:"600px", filter:"brightness(30%)"}}/>
        <Carousel.Caption>
        <form className=" d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success text-white " type="submit" style={{marginLeft:"12px"}}>Search</button>
    </form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  )
}

export default Crousel