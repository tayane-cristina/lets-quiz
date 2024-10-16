import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa';

export const BtnHome = () => {
    return (
        <Link to='/'>
            <FaHome size={30} color="blue" />
        </Link>
    )
}