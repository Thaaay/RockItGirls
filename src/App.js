
import Logo from './Componentes/Logo';
import styled from 'styled-components';


const AppContainer = styled.div`
  
    background: rgb(38,94,40);
    background: linear-gradient(0deg, rgba(38,94,40,1) 0%, rgba(253,187,45,1) 93%);
    margin: 0%;
    padding: 8%;
    height: 100vh;
    
  .App {
    cursor: default;
  }


`

function App() {
  return (
    <AppContainer>
      <header className='App-header'>
        <Logo></Logo>
      </header>
    </AppContainer>
  );
}

export default App