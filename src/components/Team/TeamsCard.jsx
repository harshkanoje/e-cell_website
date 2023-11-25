import React from 'react'

export default function TeamsCard(props) {
  return (
    <div className='teams-card flex'>
      <h3>{props.name}</h3>
      <h3>Team</h3>
    </div>
  )
}
