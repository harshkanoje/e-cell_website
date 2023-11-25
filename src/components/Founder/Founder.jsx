import React from 'react';
import './founder.css';
import Anant from '../../images/anant_dubey.png';
import BackgroundLight from '../../images/background-light.svg';

function Founder() {
  return (
    <div className='message-container flex'>
      <div className='message'>
        <div className="row">
          <div className="col-lg-4 founder-img flex">
            <img src={Anant} alt='Anant Dubey'></img>
          </div>
          <div className="col-lg-8 founder-message-container flex">
            <p className='founder-message'>
              As an early engineer at GitLab, I saw first-hand the massive
              efficiency and confidence that open source and DevOps bring
              to software teams. Now <span className='pink-text'>we’re unlocking these advantages for
              data teams</span> that used to have to rely on black box UIs and custom
              scripts, and make changes live without version control or
              testing.
            </p>
            <p className='founder'>Anant Dubey, Founder & CEO</p>
          </div>
        </div>
      </div>
      <img className="background-light bl-3" src={BackgroundLight} alt=""/>
    </div>
  )
}

export default Founder
