// import React, { useState } from 'react';
// import './PopUp.css'; // Import your CSS file for styling

// const PopUp = () => {
//   const [showPopUp, setShowPopUp] = useState(true);

//   const handleClose = () => {
//     setShowPopUp(false);
//   };

//   return (
//     <div>
//       {showPopUp && (
//         <div className="popup-container">
//           <button className="close-button" onClick={handleClose}>
//             <i className="fas fa-times"></i>
//           </button>
//           <div className="popup-content flex">
//             <img src={bizgenesis} alt="bizgenesis" />
//           </div>
//         </div>
//       )}
//       {/* Your main content goes here */}
//     </div>
//   );
// };

// export default PopUp;
import React, { useEffect, useState, } from 'react';
import './PopUp.css';
import { Link } from 'react-router-dom';


const Popup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <button className="close-button" onClick={onClose}> ❌ </button>
      <Link to="/Forms.jsx"> 
        <img src={imageUrl} alt="Popup" />
      </Link>
     
      </div>
    </div>
  );
};

export default Popup;