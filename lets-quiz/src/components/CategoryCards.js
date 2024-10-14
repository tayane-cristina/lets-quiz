import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = ({cardName, cardColor, cardImg}) => {

return(
<div style={{width: "500px", height: "500px", backgroundColor: {cardColor}}}>
    <img src={cardImg} alt={cardName + "icon"}></img>
    <Link>{cardName}</Link>
</div>

)
}
export default CategoryCards;