import logo from '../../imagens/logo.png'
import styled from 'styled-components'



const LogoContainer = styled.div`
    float: left;
    /* Alinha a imagem à esquerda */
    margin-right: 10px;

}

.logo-img {
    float: left;
    /* Alinha a imagem à esquerda */
    margin-right: 10px;
}

.Cabecalho {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 150%;
    font-size-adjust: inherit;

}

.Conteudo {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 130%;
    color: black;
    margin-top: initial;
    padding: 15px;
    background: rgba(189, 23, 139, 0);
    background-clip: padding-box;
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