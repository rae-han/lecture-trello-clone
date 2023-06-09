import RecoilSet from './components/RecoilSet';
import DND from './components/DND';

import './styles/reset.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
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
      {/*<RecoilSet />*/}
      <DND />
    </>
  );
}

export default App;
