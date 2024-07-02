import React from 'react';
import './Homepage.scss';
import Searchbar from '../../Components/Searchbar/Searchbar';

const Homepage = () => {
  return (
    <>
        <div className="homepage">
        <div className="wrapper">
            <div className="textcontainer">
           
                <h1 className='mainhead'>
                     Find Real Estate and get your <span >Dream</span> Place
                </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sapienteid nulla a. Perspiciatis, libero.
            </p>
               <Searchbar/>
            <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <p>years of experience</p>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <p>Awards</p>
                    </div>
                    <div className="box">
                        <h1>20+</h1>
                        <p>Projects</p>
                    </div>
                </div>
                </div>
                
            
            </div>
            <div className="imgcontainer">
            <img src="/bg.png" alt="" className='imgi'/>
            </div>
        </div>

        </>
    )
    }

    export default Homepage