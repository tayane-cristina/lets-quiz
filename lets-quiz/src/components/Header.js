import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

return(
<div className='header-content'>
    <h1><Link className='title' to="/">Lets Quiz!</Link></h1>
</div>

)
}
export default Header;