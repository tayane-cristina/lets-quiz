import React, { useState } from 'react';
import QuestionsCard from '../components/questionsCard/QuestionsCard';
import { booksListQuestions } from '../data/booksListQuestions';


const Books = ({}) => {

    const [quizTheme] = useState("livros")
    

return(
<div>
    <h2 className='category-title-h2'>Livros</h2>

    <QuestionsCard listQuestions={booksListQuestions} quizTheme={quizTheme} sizeList={booksListQuestions.length}/>
</div>

)
}
export default Books;