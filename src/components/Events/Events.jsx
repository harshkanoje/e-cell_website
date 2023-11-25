import React from 'react';
import './events.css';
import EventsCard from './EventsCard';

export default function Events() {
  return (
    <div className='events-container flex'>
      <h2><span className='pink-text'>/</span> Events <span className='pink-text'>/</span></h2>   
      <div className='event-cards flex'>
        <EventsCard eventName="AAROHAN" />   
        <EventsCard eventName="PRACHAR" />   
        <EventsCard eventName="PARICHAY" />   
        <EventsCard eventName="PARICHAY" />   
        <EventsCard eventName="PARICHAY" />   
        <EventsCard eventName="PARICHAY" />   
        <EventsCard eventName="PARICHAY" />   
      </div>
    </div>
  )
}
