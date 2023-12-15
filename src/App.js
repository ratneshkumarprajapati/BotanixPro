
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PlantClassification from './pages/PlantClassification';
import DiseaseClassification from './pages/DiseaseClassification';
import SeedLingsClassification from './pages/SeedLingsClassification';

function App() {
  return (
    <div className=" w-[100%] lg:w-full md:w-full   ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/classification/plantClassification' element={<PlantClassification></PlantClassification>}></Route>
        <Route path='/classification/leafDeseaseDetection' element={<DiseaseClassification></DiseaseClassification>}></Route>
        <Route path='/classification/seedLingClassification' element={<SeedLingsClassification></SeedLingsClassification>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
