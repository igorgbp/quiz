import React, { useEffect, useState } from 'react';
import './styles.css';
import Logo from '../../assets/imgs/quiz.png';
import { questions, shuffle } from '../../database/questions'
import { useNavigate } from 'react-router-dom';
import Score from '../score'


function Game() {
    const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questionsSelected, setQuestionsSelected] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [finish, setFinish] = useState()


    useEffect(() =>{
        if(questionsSelected.length >0) return 
        const shuffledQuestions = shuffle(questions)
        const selectedQuestions = shuffledQuestions.slice(0,5)
        setQuestionsSelected(selectedQuestions)
    }, [questionsSelected])


    function handleAnswer(selectedOptionIndex){
        const currentQuestionData = questionsSelected[currentQuestion]
        const userAnswer = currentQuestionData.answers[Number(selectedOptionIndex)]
        setUserAnswers([...userAnswers,userAnswer])

        if(currentQuestion<4){
            setCurrentQuestion(currentQuestion +1)
        }else {
            setFinish(true)
        }
    }

    const currentQuestionData = questionsSelected[currentQuestion]

    if(finish){
    const correctAnswers = userAnswers.filter (answer => answer.correct === true).length
    return <Score score ={correctAnswers}/>}

    return (
        <div className="container">
            <img className="logo" src={Logo} alt="Logo" />

            <div className="card">
                <div className="card-question">
                    <h2 className="card-title">Pergunta {currentQuestion+1} de 5</h2>
                    <p className="question">{currentQuestionData?.question}</p>
                </div>

                <div className="card-answer">
                   {currentQuestionData?.answers.map((option, index)=>
                    <button key={index} className='card-options' onClick={()=>handleAnswer(index)}>
                        {option.text}
                    </button>
                   )}
                </div>

            </div>



        </div>
    )
}

export default Game;