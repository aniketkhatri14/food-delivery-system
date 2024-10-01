import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'

const Fooditem = ({ id, name, price, description, image }) => {

    const { cartItem, addToCart, removeFromCart } = useContext(Storecontext)

    return (
        <div className='food_item'>
            <div className="food_item_img_container">
                <img className='food_item_image' src={image} alt="" />
                {!cartItem[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food_item_counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>

                }
            </div>
            <div className="food_item_info">
                <div className="food_item_name_rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food_item_desc">
                    {description}
                </p>
                <p className="food_item_price">
                    ₹{price}
                </p>
            </div>
        </div>
    )
}

export default Fooditem
