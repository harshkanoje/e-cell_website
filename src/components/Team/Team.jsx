import React from 'react';
import './team.css';
import TeamImage from '../../images/team2.png';
import LeadCards from './LeadCards';
import TeamsCard from './TeamsCard';

import BhaktiParashar from '../../images/Bhakti Parashar.png';
import Maragatharajan from '../../images/Maragatharajan.jfif';
import Shrinath from '../../images/Shrinath Mishra President.jpg';

export default function Team() {
  return (
    <div className='team-container'>
      <div className='team-image flex'>
        <img src={TeamImage} alt='teamImage'/>
        <div className='background-circle'></div>
      </div>
      <div className='team-leads flex'>
        <h2>Meet the <span className='pink-text'>/</span>team<span className='pink-text'>/</span></h2>
        <div className='row'>
          <div className='col-lg-4'>
            <LeadCards img={BhaktiParashar} name="Dr. Bhakti Parashar" position="Faculty Coordinator"/>
          </div>
          <div className='col-lg-4'>
            <LeadCards img={Maragatharajan} name="Dr. M Maragatharajan" position="Faculty Coordinator"/>
          </div>
          <div className='col-lg-4'>
            <LeadCards img={Shrinath} name="Shrinath Mishra" position="President"/>
          </div>
        </div>
      </div>
      <div className='teams flex'>
        <TeamsCard name="Operations"/>
        <TeamsCard name="Event"/>
        <TeamsCard name="Technical"/>
        <TeamsCard name="Design"/>
        <TeamsCard name="Content"/>
      </div>
    </div>
  )
}
