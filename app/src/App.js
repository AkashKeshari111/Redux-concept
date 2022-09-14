import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Counter1 from './Components/counter-dynamic/Counter1';
import AddTodos from './Components/Todo/AddTodos';


function App() {
  return (
    <div className="App">
      {/* <h2>simple functionality</h2>
      <Counter/>
      <h2>more functionality...</h2>
      <Counter1/> */}

      <AddTodos/>
    </div>
  );
}

export default App;
