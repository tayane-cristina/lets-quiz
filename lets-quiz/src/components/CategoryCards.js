import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = ({cardName, cardColor, cardImg}) => {

return(
<div className='card-container' style={{backgroundColor:`${cardColor}`}}>
<img className="img-icon" src={cardImg} alt={cardName + "icon"} ></img>
    <Link to={cardName}>{cardName}</Link>
</div>

)
}
export default CategoryCards;