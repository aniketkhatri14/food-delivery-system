import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'

const Fooddisplay = ({ category }) => {

    const { food_list } = useContext(Storecontext)

    return (
        <div>
            <div className="food_display" id='food_display'>
                <h2>Top dishes near you</h2>
                <div className="food_display_list">
                    {food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fooddisplay
