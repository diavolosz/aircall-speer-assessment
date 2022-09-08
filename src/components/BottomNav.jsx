import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGear, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import '../css/components_css/BottomNav.css'
import numPadDial from '../../public/img/numPadDial.png'

const BottomNav = (props) => {

  const { setContent, content } = props

  const [call, setCall] = useState()
  const [contact, setContact] = useState()
  const [setting, setSetting] = useState()

  //checks if the current content display item is a bottom display, else remove highlight
  useEffect(() => {
    if (content !== 'inbox') {
      setCall(null)
    } else {
      setCall('bot-nav-highlight')
    }
    if (content !== 'contact') {
      setContact(null)
    }
    if (content !== 'setting') {
      setSetting(null)
    }
  }, [content])

  //handle selective highlight for each item selected 
  const handleCallHistoryHighlight = () => {
    setContent('inbox')
    setCall('bot-nav-highlight')
    setContact(null)
    setSetting(null)
  }

  const handleContactHighlight = () => {
    setContent('contact')
    setCall(null)
    setContact('bot-nav-highlight')
    setSetting(null)
  }

  const handleSettingHighlight = () => {
    setContent('setting')
    setCall(null)
    setContact(null)
    setSetting('bot-nav-highlight')
  }
  const handleDialPadSelect = () => {
    setContent('dialPad')
    setCall(null)
    setContact(null)
    setSetting(null)
  }


  return (
    <div className='bottom-nav-container'>
      <div className={`nav-item call-history-container ${call}`} onClick={() => handleCallHistoryHighlight()}>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className={`nav-item contact-container ${contact}`}>
        <FontAwesomeIcon icon={faUser} onClick={() => handleContactHighlight()} />
      </div>
      <div className='nav-item dial-pad-container' onClick={() => handleDialPadSelect()}>
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