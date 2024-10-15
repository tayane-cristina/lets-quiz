import React from 'react';
import { generalListQuestions } from '../data/generalListQuestions';
import QuestionsCard from '../components/QuestionsCard';

const Generals = () => {

return(
<div>
    <h2>Gerais</h2>

    <QuestionsCard  listQuestions={generalListQuestions} sizeList={generalListQuestions.length}/>
</div>

)
}
export default Generals;