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
    <h2>Escolha uma categoria</h2>
    <p>
        Você está pronto para testar seus conhecimentos e se divertir ao mesmo tempo? Então lets quiz, descubra o quanto você realmente 
        sabe! São perguntas desafiadoras e curiosidades que vão te surpreender. Será que você consegue acertar todas? Escolha uma categoria e comece o desafio!
    </p>

    <ul>
        {categories.map((categorie, index) => (
            <Link key={index} to={`/${categorie.link}`} className='card-container'>
                <categorie.icon className='img-icon'/>
                <p>{categorie.title}</p>
            </Link>
        ))}
    </ul>
</div>

)
}
export default Home;