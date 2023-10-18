
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className=" w-[100%]  ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
