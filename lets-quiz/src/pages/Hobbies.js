import React from 'react';
import QuestionsCard from '../components/QuestionsCard';
import { hobbiesListQuestions } from '../data/hobbiesListQuestions';

const Hobbies = () => {

return(
<div>
    <h2>Hobbies</h2>

    <QuestionsCard  listQuestions={hobbiesListQuestions} sizeList={hobbiesListQuestions.length}/>
</div>

)
}
export default Hobbies;