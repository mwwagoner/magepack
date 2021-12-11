import './css/App.css';
import pixelBackpack from './images/pixel-art-backpack.png'



function App() {
  return (
    <div className="App">
      <h1>MagePack</h1>
      <p>It's dangerous to go without it</p>
      <img src={pixelBackpack} alt="A pixel-art brown backpack"></img>
    </div>
  );
}

export default App;