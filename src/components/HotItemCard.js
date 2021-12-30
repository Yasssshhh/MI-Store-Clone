import React from 'react'
import "../styles/HotItemCard.css"
const HotItemCard = ({image,index,name,price}) => {
    return (
        <div className="HotItemCard">
            <img src={image} alt={`${index} product`}/>
            <p>{name}</p>
        </div>
    )
}

export default HotItemCard
