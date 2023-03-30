import React from 'react';
import './styles.css'; 
import Logo from '../../assets/imgs/quiz.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigation = useNavigate()
    const navigate = () =>{
        navigation('/game')
    }
  return (
    <div className="container">
        <h1 className="title">Bem vindo ao</h1>
        <img className="logo"src={Logo} alt="Logo" />
        <small className="description">Teste seus conhecimentos </small>
        <button className="btn-start" onClick={navigate}>✔ Começar</button>
        
        <footer className="footer">
            <p>Criado por  
                {/* <a href="https://github.com/o-wagner" target="_blank" rel="noreferrer" className="author"> Wagner Oliveira 🚬</a> */}
            </p>
        </footer>
    </div>
  ) 
}

export default Home;

