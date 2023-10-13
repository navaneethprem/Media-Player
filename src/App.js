import {Routes,Route} from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      {/* <h1>Media Player App</h1> */}
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
