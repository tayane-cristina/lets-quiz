import React from 'react';
import QuestionsCard from '../components/QuestionsCard';
import { booksListQuestions } from '../data/booksListQuestions';

const Books = ({}) => {

return(
<div>
    <h2>Livros</h2>

    <QuestionsCard listQuestions={booksListQuestions} sizeList={booksListQuestions.length}/>
</div>

)
}
export default Books;