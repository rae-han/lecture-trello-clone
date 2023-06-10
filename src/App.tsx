import './styles/reset.css';
import { createGlobalStyle } from 'styled-components';

import Animations from './components/Animations';

const GlobalStyle = createGlobalStyle`  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    //background-color: ${(props) => props.theme.bgColor};
    background: linear-gradient(180deg, #747bff, #535bf2);
    color: black;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Animations />
    </>
  );
}

export default App;
