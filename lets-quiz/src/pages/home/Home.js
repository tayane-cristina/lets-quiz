import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm, FaMusic, FaBook, FaCamera, FaStar } from "react-icons/fa";

const Home = () => {

    const categories = [
        {
            icon: FaFilm,
            link: "cinema",
            title: "Cinema",
        },
        {
            icon: FaMusic,
            link: "music",
            title: "Música",
        },
        {
            icon: FaBook,
            link: "Books",
            title: "Livros",
        },
        {
            icon: FaCamera,
            link: "Hobbies",
            title: "Hobbies",
        },
        {
            icon: FaStar,
            link: "trivia",
            title: "Trivial",
        },
    ]

    categories.map((categorie,index) => console.log(categorie.icon))

return(
<div className='div-container'>
    <h1><Link to="/">Lets Quiz!</Link></h1>
    <h2>Escolha uma categoria</h2>

    <ul>
        {categories.map((categorie, index) => (
            <li key={index} className='card-container'>
                <categorie.icon className='img-icon'/>
                <Link to={`/${categorie.link}`}>{categorie.title}</Link>
            </li>
        ))}
    </ul>
</div>

)
}
export default Home;