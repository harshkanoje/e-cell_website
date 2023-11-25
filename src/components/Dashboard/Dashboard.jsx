import React from 'react';
import './dashboard.css';
import Hexagon from '../../images/pattern.svg';
import BackgroundLight from '../../images/background-light.svg';

export default function Dashboard() {
  return (
    <div className='dashboard flex'>
    
      <div className='heading flex'>
        <h1><span className='pink-text'>/</span> Transforming Dreams into Reality <span className='pink-text'>/</span> <br /> One Start-Up at a Time!</h1>
        <p>
          Unleash your entrepreneurial spirit with E-Cell, VIT Bhopal! Dive into an ecosystem 
          where innovation meets passion, and ideas transform into impact. Let’s create, 
          collaborate, and change the world together!
        </p>
        <button className='join-button'>Start Your Journey</button>
        <img className="background-light bl-1" src={BackgroundLight} alt=""/>
        <img className="background-light bl-2" src={BackgroundLight} alt=""/>
      </div>

      <div className='about flex'>
      <div class="row">
        <div class="col-lg-5 pattern flex">
          <img src={Hexagon} alt='pattern'/>
        </div>
        <div class="col-lg-7 description flex">
          <h3>Ecell VIT-Bhopal</h3>
          <p>
            Meltano unlocks software development workflows for data
            movement and gives data engineers complete control and visibility
            of their pipelines, delivering unparalleled efficiency and confidence
            in every change. With Meltano, data teams can fetch data from
            anywhere, send data anywhere, and transform their data their way.
          </p>
          <p>
            Meltano unlocks software development workflows for data
            movement and gives data engineers complete control and visibility
            of their pipelines, delivering unparalleled efficiency and confidence
            in every change. With Meltano, data teams can fetch data from
            anywhere, send data anywhere, and transform their data their way.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
