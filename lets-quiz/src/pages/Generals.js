import React from 'react';
import { generalListQuestions } from '../data/generalListQuestions';
import QuestionsCard from '../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const Generals = () => {

    const [quizTheme] = useState("conhecimentos gerais")

return(
<div>
    <h2 className='category-title-h2'>Trivial</h2>

    <QuestionsCard  listQuestions={generalListQuestions} quizTheme={quizTheme} sizeList={generalListQuestions.length}/>
</div>

)
}
export default Generals;