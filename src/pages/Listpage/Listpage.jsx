import React from 'react';
import './Listpage.scss';
import Filter from "../../Components/filter/Filter";
import Card from '../../Components/card/Card';
import { listData } from '../../lib/data';
import { Map } from '../../Components/map/Map';
const Listpage = () => {
  const data=listData;
 


  return (
   
    <div className='listpage'>
       <div className="listcontainer">
        <div className="wrapper">
               <Filter/>
               {data.map(item=>(
                <Card key={item.id} item={item}/>
               ))}
        </div>
       </div>
       <div className="mapcontainer"></div>
              <Map/>  
    </div>
  )
}

export default Listpage