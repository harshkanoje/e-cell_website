import React from 'react'

export default function EventsCard(props) {
  return (
    <div className='events-card flex'>
      <h3>{props.eventName}</h3>
      <div className='background-light event-card-background-light'></div>
    </div>
  )
}
