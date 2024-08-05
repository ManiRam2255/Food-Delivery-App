////FoodDisplay component retrieves and displays the list of food items from the context.
//Context Access: useContext(StoreContext) is used to access food_list from the StoreContext.
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            if(category==="All" || category===item.category)
            {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
