import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

/*pages*/
import Home from './pages/home/Home';
import Cinema from './pages/Cinema';
import Music from './pages/Music';
import Books from './pages/Books';
import Hobbies from './pages/Hobbies';
import Generals from './pages/Generals';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1><Link to="/">Lets Quiz!</Link></h1>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cinema' element={<Cinema />}></Route>
        <Route path='/music' element={<Music />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/hobbies' element={<Hobbies />}></Route>
        <Route path='/generals' element={<Generals />}></Route>
      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
