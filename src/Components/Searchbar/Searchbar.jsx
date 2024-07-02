import React from 'react'
import "./Searchbar.scss";
const Searchbar = () => {
  return (
  <div className='sb'>
      <div className='sbb'>
        <button> Buy </button>
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