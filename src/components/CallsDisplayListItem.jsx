import React from 'react';
import '../css/components_css/CallsDisplayListItem.css'
import formatDate from '../helpers/formatDate.js'
import formatAMPM from '../helpers/formatAmPm.js'

import outbound from '../../public/img/outbound.png'
import inbound from '../../public/img/inbound.png'

import generateMissedDescription from '../helpers/generateMissedDescription.js'

const CallsDisplayListItem = (props) => {

  const { createdTime, from, to, via, duration, type, direction, archived } = props

  return (
    <div className='display-item-container'>

      <div className='date-container'>
        <span className='dot'>· · · · · · · · · · · · · ·</span>
        <span>{formatDate(new Date(createdTime))}</span>
        <span className='dot'>· · · · · · · · · · · · · ·</span>
      </div>

      <div className='call-info-container'>

        <div className='call-direction'>
          {direction === 'outbound' && <img src={outbound} alt='outbound-call' />}
          {direction === 'inbound' && <img src={inbound} alt='inbound-call' />}
        </div>

        <div className='call-person-info-container'>
          <div className='call-person-info'>
            <div className='call-source'>{from}</div>
            <div className='call-action'>{generateMissedDescription(type, to, via)}</div>
          </div>
        </div>

        <div className='separator'>
          <span>· · ·</span>
        </div>

        <div className='call-time'>
          <span>{formatAMPM(new Date(createdTime))}</span>
        </div>

      </div>



    </div>
  )
};

export default CallsDisplayListItem;