import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome'

function App() {

  const isSignedIn = !!localStorage.getItem('token')


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {isSignedIn && <Route path="/welcome" element={<Welcome />} />}
      </Routes>
    </div>
  );
}

export default App;
