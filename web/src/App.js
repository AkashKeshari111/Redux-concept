import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Feeds from './Pages/Feeds';
import RequiredAuth from './components/RequiredAuth';
import Post from './Pages/Post';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/feeds" element={<RequiredAuth><Feeds/></RequiredAuth>}/>
        <Route path="/cartItem" element={<RequiredAuth><Post/></RequiredAuth>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
