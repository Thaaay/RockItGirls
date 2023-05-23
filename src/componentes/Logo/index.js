import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    float: right;
    margin-right: 20px;
    animation: go-back 2s;
    display: colunm;
    
}

.logo-img {
    float: right;
    margin-right: 70px;
    border-width: 40px;
    padding: 10px;
       
}

.Cabecalho {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 300%;
    font-size-adjust: inherit;
    word-break: keep-all;
    text-align: center;
   
}

.Conteudo {
    font-family: 'Montserrat', sans-serif;
    font-size: 130%;
    color: black;
    margin-top: initial;
    padding: 60px;
    background: rgba(189, 23, 139, 0);
    background-clip: padding-box;
    background-color: Wheat;
    border-color:  Wheat;
    border-radius: 30px;
    word-break: keep-all;
       
}

@keyframes go-back {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
@keyframes mymove {
    50% {border: 15px solid green;}
    }

`

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt='logo'
                className='logo-img'>
            </img>
            <p className='Cabecalho'>RockItGirls Mulheres na Tecnologia</p>
            <h3 className='Conteudo'>RockItGirls é um grupo de mulheres de tecnologia que foi fundado em 2022,
                inicialmente como um grupo do livro na John Deere. A equipe tem como missão
                quebrar velhos paradigmas e aumentar a presença feminina em cargos de liderança.
                O grupo é composto por mulheres talentosas e engajadas em promover a
                diversidade e a inclusão na indústria de tecnologia. O RockItGirls tem
                realizado diversas ações para atingir seus objetivos, como mentorias,
                eventos de networking e workshops. O trabalho do RockItGirls tem inspirado
                mulheres a seguir carreiras em tecnologia. A equipe é um exemplo de como a
                diversidade e a inclusão são importantes para o sucesso e a inovação em
                tecnologia.</h3>
        </LogoContainer>
    )
}


export default Logo