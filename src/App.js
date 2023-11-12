import './App.scss';
import Navbar from './components/navbar/Navbar';

/* ✅
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'; 
 */
//google font is used via cdn link in index html




//Google fonts component
// import styled from 'styled-components';
// const StyledText = styled.p`font-family: 'FontStyle', sans-serif;`;
/* const StyledText = styled.p`font-family: 'FontStyle', sans-serif;`;
const StyledTexta = styled.h1`font-family: 'Noto Serif Display', serif;`; */


function App() {
  return (
    <div className="App">
      {/* <StyledTexta>Application</StyledTexta> */}
      {/* <h1>Application</h1> */}
      {/* <StyledText>City Tours app.</StyledText> */}
      {/* <p>City Tours app.</p>  */}
      {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})}></FontAwesomeIcon> */}
      {/* <div> */}
        {/* This is the dynamic application of fontawesome - via Babel Macros */}
        {/*✅ <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> 
        <FontAwesomeIcon icon={icon({name: 'user', family:'classic' , style:'solid'})}></FontAwesomeIcon>
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} size='6x' />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} rotation='90' />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} beatFade  />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} spinPulse   />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} bounce />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} spin />
        <FontAwesomeIcon icon={icon({name:'earth-america', style:'solid' })} spinPulse /> ✅ */}
        {/* <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> ❌ */}
      {/* </div> */}
      
      <Navbar></Navbar>


    </div>
  );
}

export default App;
