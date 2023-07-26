import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Ecosystem from './Components/Ecosystem/Ecosystem';
import Why_moondog from './Components/Why_moondog/Why_moondog';
import Token_contract from './Components/Token_contract/Token_contract';
import Roadmap from './Components/Roadmap/Roadmap';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import NFT from './Components/NFT/NFT';

function App() {
  return (
    <div className="App">
  <Header/>
  <Landing_page/>
  <Ecosystem/>
  <NFT/>
  <Why_moondog/>
  <Token_contract/>
  <Roadmap/>
  <FAQ/>
  <Footer/>
    </div>
  );
}

export default App;
