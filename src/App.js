
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import PlantClassification from './pages/PlantClassification';

function App() {
  return (
    <div className=" w-[100%]  ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/classification/plantClassification' element={<PlantClassification></PlantClassification>}></Route>
        <Route path='/classification/leafDeseaseDetections' element={<ContactUs></ContactUs>}></Route>
        <Route path='/classification/seedLinkClassification' element={<ContactUs></ContactUs>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
