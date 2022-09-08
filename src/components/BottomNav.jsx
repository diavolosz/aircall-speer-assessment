import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGear, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import '../css/components_css/BottomNav.css'
import numPadDial from '../../public/img/numPadDial.png'

const BottomNav = () => {


  const [call, setCall] = useState()
  const [contact, setContact] = useState()
  const [setting, setSetting] = useState()

  const handleCallHistoryHighlight = () => {
    setCall('bot-nav-highlight')
    // props.setContent('inbox')
    setContact(null)
    setSetting(null)
  }

  const handleContactHighlight = () => {
    setCall(null)
    setContact('bot-nav-highlight')
    setSetting(null)
  }

  const handleSettingHighlight = () => {
    setCall(null)
    setContact(null)
    setSetting('bot-nav-highlight')
  }



  return (
    <div className='bottom-nav-container'>
      <div className={`nav-item call-history-container ${call}`} onClick={() => handleCallHistoryHighlight()}>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className={`nav-item contact-container ${contact}`}>
        <FontAwesomeIcon icon={faUser} onClick={() => handleContactHighlight()}/>
      </div>
      <div className='nav-item dial-pad-container'>
        <img className='numPadDial-png' src={numPadDial} alt='numPadDial' />
      </div>
      <div className={`nav-item setting-container ${setting}`} onClick={() => handleSettingHighlight()}>
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div className='nav-item online-status-container'>
        <FontAwesomeIcon icon={faCircle} />
      </div>
    </div>
  )
};

export default BottomNav;