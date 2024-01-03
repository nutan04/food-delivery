import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Card from '../components/Cardnew';


function Home() {
  const [search, setSearch] = useState("");
  const [foodcat, setFoodcat] = useState([]);

  const [fooditem, setFooditem] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },


    })
    response = await response.json();
    setFooditem(response[0])
    setFoodcat(response[1])
    // console.log(response[0],response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])
  // console.log(fooditem);
  return (




    <>
      <Navbar />
      <div className='crousel'>
      
        
      
     <Carousel activeIndex={index} onSelect={handleSelect} style={{objectFit:"contain !important"}}>
      <Carousel.Item>
      <img class="d-block w-100 " src="https://source.unsplash.com/random/200×200/?burger" alt="Third slide" style={{height:"600px", filter:"brightness(30%)"}}/>
        <Carousel.Caption>
        <form className=" d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      {/* <button className="btn btn-success text-white " type="submit" style={{marginLeft:"12px"}}>Search</button> */}
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
      <div className="container-fluid">
        {
          foodcat != [] ?
            foodcat.map((data) => {
              return (<div >
                <div key={data._id} className='fs-3 m-3 text-center'>
                  {data.CategoryName}
                </div>
                <hr />
                <div className="container">
                  <div className="row">
                    {
                      fooditem != [] ? fooditem.filter(
                        (item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                      ).map(
                        filterItems => {
                          return (
                            <>

                              <div key={filterItems._id} className='col-lg-3 col-md-6 col-sm-12'>

                                <Card 
                                foodItem={filterItems}
                                  option={filterItems.options[0]}
                                 

                                />

                              </div>

                            </>)
                        }
                      ) : <div>No such data found</div>
                    }
                  </div>
                </div>
              </div>)
            }) : ""
        }
      </div>
      <Footer />
    </>

  )
}

export default Home