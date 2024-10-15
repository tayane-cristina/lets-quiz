import React from 'react';
import CategoryCards from '../../components/CategoryCards';

const Home = () => {

return(
<div className='div-container'>
    <h2>Escolha uma categoria</h2>

    <ul>
        <li><CategoryCards cardColor="yellow" cardImg="https://img.icons8.com/?size=50&id=2791&format=png" cardName="Cinema"/></li>
        <li><CategoryCards cardColor="darkBlue" cardImg="https://img.icons8.com/?size=50&id=9403&format=png" cardName="Music"/></li>
        <li><CategoryCards cardColor="purple" cardImg="https://img.icons8.com/?size=50&id=23663&format=png" cardName="Books"/></li>
        <li><CategoryCards cardColor="orange" cardImg="https://img.icons8.com/?size=50&id=HaIBVDvtZ8H7&format=png" cardName="Hobbies"/></li>
        <li><CategoryCards cardColor="gray" cardImg="https://img.icons8.com/?size=50&id=43440&format=png" cardName="Generals"/></li>
    </ul>
</div>

)
}
export default Home;