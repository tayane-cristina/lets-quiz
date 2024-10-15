import React, { useEffect } from 'react';
import { useState } from 'react';

const QuestionsCard = ({listQuestions, sizeList, quizTheme}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [isAnswared, setIsAnswared] = useState(false);
    const [score, setScore ] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false)
    const [resultMessage, setResultMessage] = useState("")

    /*Função que verifica se o usuário respondeu corretamente*/
    const userResponse = (option, correctAnswar) => {
        setSelectedOption(option)
        setIsAnswared(true)

        if (option === correctAnswar) {
            setFeedback("Acertou!")
            setScore((prevScore) => prevScore + 10)
        } else {
            setFeedback(`Errou, a resposta correta é ${correctAnswar}`)
        }
    }

    /*Função que passa para a próxima pergunta */
    const nextQuestion = () => {
        if (currentQuestion < sizeList - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setFeedback("")
            setSelectedOption(null)
            setIsAnswared(false)
        } else {
            setQuizFinished(true)
        }
    }

    /*Função que envia mensagem de fim de jogo */
    useEffect(() => {
        if (quizFinished) {
            finishQuiz(score)
        }
    }, [quizFinished, score])


    const finishQuiz = (score) => {
        
        if (score === 0) {
            setResultMessage("Que pena, você não acertou nenhuma pergunta desta vez! Mas não desanime! Aproveite essa oportunidade para aprender e melhorar. Tente de novo e continue explorando seus conhecimentos. Quem sabe na próxima rodada você se sai muito melhor!")
        } else if (score > 0 && score <= 50) {
            setResultMessage("Bom trabalho! Você acertou algumas perguntas. Dá pra ver que você tem um bom conhecimento, mas ainda há espaço para melhorar. Continue praticando e da próxima vez tenho certeza de que você pode alcançar uma pontuação ainda maior!")
        } else {
            setResultMessage(`Parabéns! Você teve um excelente desempenho! Seus conhecimento sobre ${quizTheme} é realmente impressionante. Continue assim, e se desafie com perguntas ainda mais difíceis para expandir ainda mais suas habilidades!`)
        }
    }

    /*Função que reinicia o quiz*/
    const reset = () => {
        setQuizFinished(false)
        setCurrentQuestion(0)
    }

return(
    <div>
        {!quizFinished ? (
            <ol>
            <legend>Pergunta {currentQuestion + 1}/{sizeList} - {listQuestions[currentQuestion].ask}</legend>
            {listQuestions[currentQuestion].options.map((opt, index) => (
                <li 
                key={index}
                onClick={() => !isAnswared && userResponse(opt, listQuestions[currentQuestion].answar)}
                style={{
                    fontWeight: selectedOption === opt ? "bold" : "normal",
                    cursor: isAnswared ? "not-allowed" : "pointer",
                    color: isAnswared ? "gray" : "black",
                }}
                >
                {opt}
                </li>
            ))}
            <p>{feedback}</p>
            <button onClick={nextQuestion}>Próxima</button>
        </ol>
        ) : (
            <div>
            <p><strong>Quiz finalizado!</strong></p>
            <p>Seu score é de <strong>{score}</strong></p>
    
            <p>{resultMessage}</p>
            <button onClick={() => reset()}>Tentar novamente</button>
        </div>
        )}
    </div>
    )
}
export default QuestionsCard;