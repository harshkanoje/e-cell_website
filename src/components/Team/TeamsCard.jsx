import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TeamsCard(props) {
  const navigate = useNavigate();

  const handleClick = (() => {
    navigate(props.link);
  })

  return (
    <div className='teams-card flex' onClick={handleClick}>
      <h3>{props.name}</h3>
      <h3>Team</h3>
    </div>
  )
}
