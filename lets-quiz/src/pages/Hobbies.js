import React from 'react';
import QuestionsCard from '../components/questionsCard/QuestionsCard';
import { hobbiesListQuestions } from '../data/hobbiesListQuestions';
import { useState } from 'react';
const Hobbies = () => {

    const [quizTheme] = useState("hobbies")

return(
<div>
    <h2 className='category-title-h2'>Hobbies</h2>

    <QuestionsCard  listQuestions={hobbiesListQuestions} quizTheme={quizTheme} sizeList={hobbiesListQuestions.length}/>
</div>

)
}
export default Hobbies;