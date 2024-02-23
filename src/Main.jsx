import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
// import Founder from './components/Founder/Founder';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import PopUp from "./components/Dashboard/PopUp"
import { useState } from 'react';
import bizgenesis from './images/bizgenesis.png'

function Main() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <Navbar />
      <Dashboard />
      {/* <Founder /> */}
      <PopUp imageUrl={bizgenesis}/>
      <Events />
      <Team />
      <Footer />
    </div>
  )
}

export default Main;
