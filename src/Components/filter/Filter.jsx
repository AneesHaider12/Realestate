import "./Filter.scss";
const Filter = () => {
 
  return(
    <div className="filter">
        Search Results for <b>London</b>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id="city" name="city" placeholder="City Location"/>
          </div>
        </div>
        <div className="bottom">
        <div className="item">
            <label htmlFor="type">Type</label>
            <select name="" id="">
              <option value="any">any</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="" id="">
              <option value="any">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input type="number" name="minPrice" id="minPrice" placeholder="any"/>
              
            
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input type="number" id="maxPrice" name="maxPrice" placeholder="any"/>
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input type="text" id="city" name="city" placeholder="any"/>
          </div>
          <button >
            <img src="/search.png" alt=""/>
          </button>
        </div>
        </div>
  )
}

export default Filter;