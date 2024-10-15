import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = ({cardName, cardColor, cardImg}) => {

return(
<div style={{width: "300px", height: "300px", backgroundColor:`${cardColor}`, margin:"10px"}}>
    <img src={cardImg} alt={cardName + "icon"} style={{width: "80px", height: "80px"}} ></img>
    <Link to={cardName}>{cardName}</Link>
</div>

)
}
export default CategoryCards;