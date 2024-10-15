import React from 'react';
import { musicListQuestions } from '../data/musicListQuestions';
import QuestionsCard from '../components/QuestionsCard';

const Music = () => {

return(
<div className='principal-div'>
    <h2>Musica</h2>

    <QuestionsCard  listQuestions={musicListQuestions} sizeList={musicListQuestions.length}/>
</div>

)
}
export default Music;