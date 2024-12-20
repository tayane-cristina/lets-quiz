import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

/*pages*/
import Home from './pages/home/Home';
import Cinema from './pages/Cinema';
import Music from './pages/Music';
import Books from './pages/Books';
import Hobbies from './pages/Hobbies';
import Generals from './pages/Generals';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cinema' element={<Cinema />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/books' element={<Books />}></Route>
          <Route path='/hobbies' element={<Hobbies />}></Route>
          <Route path='/trivia' element={<Generals />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
