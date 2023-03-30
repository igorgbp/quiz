import React from 'react';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';
import { useNavigate } from 'react-router-dom';

function Score( {score}) {
    const navigation = useNavigate()
    const navigate = () =>{
        navigation('/')
    }

    const messages = {
        0: 'Absolutamente nada',
        1: 'Sabe nada',
        2: 'Sabe opuco',
        3: 'Está no caminho',
        4: 'Está bom',
        5: 'Está otimo'
    }
  return (
    <div className="container">
        <h1 className="title">Pontuação</h1>
        
        <img className="logo"src={Logo} alt="Logo" />
        <small className="description">{messages[score]} </small>
        <div className="score-container" style={{marginTop:'10px'}}>
            <big  style={{color:'white', fontSize:'50px', fontFamily:'Arial'}}>{score?score:5}</big>
            <small  style={{color:'white', fontSize:'20px', fontFamily: 'Arial'}}>/5</small>
        </div>
        <button className="btn-restart" onClick={navigate}>✔ Reiniciar</button>
        
        <footer className="footer">
            <p>
                ✔
            </p>
        </footer>
    </div>
  ) 
}

export default Score;

