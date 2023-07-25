import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Ecosystem from './Components/Ecosystem/Ecosystem';
import Why_moondog from './Components/Why_moondog/Why_moondog';
import Token_contract from './Components/Token_contract/Token_contract';
import Roadmap from './Components/Roadmap/Roadmap';

function App() {
  return (
    <div className="App">
  <Header/>
  <Landing_page/>
  <Ecosystem/>
  <Why_moondog/>
  <Token_contract/>
  <Roadmap/>
    </div>
  );
}

export default App;
