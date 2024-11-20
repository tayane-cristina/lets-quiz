import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm, FaMusic, FaBook, FaCamera, FaStar } from "react-icons/fa";
import './Home.css'

const Home = () => {

    const categories = [
        {
            icon: FaFilm,
            link: "cinema",
            title: "Cinema",
            background: "mediumseagreen"
        },
        {
            icon: FaMusic,
            link: "music",
            title: "Música",
            background: "deepskyblue"
        },
        {
            icon: FaBook,
            link: "Books",
            title: "Livros",
            background: "darkorange"
        },
        {
            icon: FaCamera,
            link: "Hobbies",
            title: "Hobbies",
            background: "red"
        },
        {
            icon: FaStar,
            link: "trivia",
            title: "Trivial",
            background: "darkorchid"
        },
    ]

    return(
    <div className='div-container'>
        <main className='div-container-main'> 
            <h2 className='div-container-h2'>Escolha uma categoria</h2>
            <p className='intro-text'>
                Você está pronto para testar seus conhecimentos e se divertir ao mesmo tempo? Então Lets Quiz, descubra o quanto você realmente 
                sabe! São perguntas desafiadoras e curiosidades que vão te surpreender. Será que você consegue acertar todas? Escolha uma categoria e comece o desafio!
            </p>

            <ul className='div-container-ul-cards'>
                {categories.map((categorie, index) => (
                    <Link 
                        key={index} 
                        to={`/${categorie.link}`} 
                        className='card-container'
                        style={{backgroundColor: `${categorie.background}`}}
                    >
                        <categorie.icon className='img-icon'/>
                        <p className='category-text'>{categorie.title}</p>
                    </Link>
                ))}
            </ul>
        </main>
        
    </div>

    )
}
export default Home;