import React from 'react';
import {Link} from "react-router-dom";
import "./Card.scss";
const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imgcontainer">
      <img src={item.img} alt="" /></Link>
      <div className="textcontainer">
        <div className="title">
         <h3 className='title'> <Link to={`/${item.id}`}>{item.title}</Link></h3>
        </div>

        <p className='address'>
          <img src="/pin.png" alt="" />
          <Link to={`/${item.address}`}><span>{item.address}</span></Link>
        </p>
        <p className='price'>${item.price}</p>

        <div className="bottom">
          <div className="features">
           <div className="feature">
            <img src="/bed.png" alt=""/>
            <span>{item.bedroom} bedroom</span>
           </div>
           <div className="feature">
            <img src="/bath.png" alt=""/>
            <span>{item.bathroom} bathroom</span>
           </div>
          </div>
          <div className="icons">
          <div className="icon">
            <img src="/save.png" alt="" />
          </div>
          <div className="icon">
            <img src="/chat.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card