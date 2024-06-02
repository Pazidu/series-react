import './App.css';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Films from './pages/Films/Films';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Tvseries from './pages/Tv series/Tvseries';
import Watch from './pages/Watch/Watch';
import AwardsEvents from './pages/Awards&Events/AwardsEvents';
import RegistationFile from './pages/RegistationForm/RegistationFile';
import PersonalViewHome from './pages/PersonalViewHome/PersonalViewHome';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className='background'>
      <Router>
       <div>
         <Routes>

           <Route exact path="/" element={<Home/>}></Route>
           <Route path="/About" element={<About/>}></Route>
           <Route path="/ContactUs" element={<ContactUs/>}></Route>
           <Route exact path="/Films" element={<Films/>}></Route>
           <Route exact path="/Tvseries" element={<Tvseries/>}></Route>
           <Route exact path="/Watch" element={<Watch/>}></Route>
           <Route exact path="/AwardsEvents" element={<AwardsEvents/>}></Route>
           <Route exact path="/RegistationFile" element={<RegistationFile/>}></Route>
           <Route exact path="/PersonalViewHome" element={<PersonalViewHome/>}></Route>
           <Route exact path="/Login" element={<Login/>}></Route>

         </Routes>
       </div>
     </Router>
    </div>
  );
}

export default App;
