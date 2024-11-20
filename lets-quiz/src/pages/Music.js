import React from 'react';
import { musicListQuestions } from '../data/musicListQuestions';
import QuestionsCard from '../components/questionsCard/QuestionsCard';
import { useState } from 'react';

const Music = () => {

    const [quizTheme] = useState("música")

return(
<div className='principal-div'>
    <h2 className='category-title-h2'>Musica</h2>

    <QuestionsCard  listQuestions={musicListQuestions} quizTheme={quizTheme} sizeList={musicListQuestions.length}/>
</div>

)
}
export default Music;