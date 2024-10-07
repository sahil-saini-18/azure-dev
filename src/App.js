
import './App.css';

function App() {
  return (
    <div className="App">
        <p>Hello  {process.env.REACT_APP_KEY}</p>
    </div>
  );
}

export default App;
