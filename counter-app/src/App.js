import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Counter1 from './Components/counter-dynamic/Counter1';


function App() {
  return (
    <div className="App">
      <h2>simple functionality</h2>
      <Counter/>
      <h2>more functionality...</h2>
      <Counter1/>
    </div>
  );
}

export default App;
