import React from 'react';
import { useState } from 'react';
import QuestionsCard from '../components/QuestionsCard';
import { CinemaListQuestions } from '../data/CinemaListQuestions';

const Cinema = () => {

    const [quizTheme] = useState("Cinema")
return(
<div className='principal-div'>
    <h2>Cinema</h2>

    <QuestionsCard  listQuestions={CinemaListQuestions} quizTheme={quizTheme} sizeList={CinemaListQuestions.length}/>
</div>

)
}
export default Cinema;