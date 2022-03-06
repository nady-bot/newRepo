
import About from './About/About';
import Home from './Home/Home';
import DonorRegistration from './DonorRegistration/DonorRegistration';
import SendRequest from './SendRequest/SendRequest';
import ViewRequest from './ViewRequest/ViewRequest';
import Camps from './Camps/Camps';
import Login from './Login/Login';
import Search from './Search/Search';
import ContactUs from './ContactUs/ContactUs';
import Navbar from './Navbar/Navbar';

import logoImg from "../images/logo.png"; 
import { Route, Routes } from 'react-router-dom';
import Notfound from './Notfound/Notfound';


function App() {






  return <div>

  <img  src = {logoImg} alt = "" /> 

    <Navbar />
    <Routes>
      
      <Route path = "/" element  = {<DonorRegistration />}>  </Route>
      <Route path = "about" element  = {<About />}>  </Route>
      <Route path = "home" element  = {<Home />}>  </Route>
      <Route path = "donor_registration" element  = {<DonorRegistration />}>  </Route>
      <Route path = "send_request" element  = {<SendRequest />}>  </Route>
      <Route path = "view_request" element  = {<ViewRequest />}>  </Route>
      <Route path = "camps" element  = {<Camps />}>  </Route>
      <Route path = "login" element  = {<Login />}>  </Route>
      <Route path = "search" element  = {<Search />}>  </Route>
      <Route path = "contact_us" element  = { <ContactUs />}>  </Route>
      <Route path = "*" element  = { <Notfound />}>  </Route>

    </Routes>
    
  </div>;
}

export default App;




/* Home
DonorRegistration
SendRequest
ViewRequest
Camps
Login
Search
ContactUs
About */

















