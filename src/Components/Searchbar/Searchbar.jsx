import React from 'react'
import "./Searchbar.scss";
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {
  
    const navigate = useNavigate();
  
  
  
  return (
  <div className='sb'>
      <div className='sbb'>
        <button onClick={()=>{
          navigate("/list")
        }}> Buy </button>
        <button> Sell </button>
      </div>
      <div className="mainsbb">
        <input type="text" placeholder='type' />
        <input type="text" placeholder='max-price' />
        <input type="text" placeholder='min-price' required/>
      </div>
    </div>
  )
}

export default Searchbar