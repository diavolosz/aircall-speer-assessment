import React, { useEffect, useState } from 'react';
import '../css/components_css/CallDetails.css'

import formatDate from '../helpers/formatDate.js'
import formatAMPM from '../helpers/formatAmPm.js'
import formatSecond from '../helpers/formatSecond';

import iconThumbnail from '../../public/img/iconThumbnail.png'
import generateCallDescription from '../helpers/generateCallDescription.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

const CallDetails = (props) => {

  const { id, createdTime, from, to, via, duration, type, direction, archived, setContent } = props

  const handleArchive = (archiveStatus) => {
    if (archiveStatus === false) {
      console.log('can be archived !')
      axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: !archiveStatus })
        .then(() => {
          console.log('is now archived')
          setContent('archive')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('can be Unarchived !')
      axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: !archiveStatus })
        .then(() => {
          console.log('is now Unarchived')
          setContent('calls')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }


  return (
    <div className='call-details-container'>
      <img className='call-thumbnail' src={iconThumbnail} alt='thumbnail' />

      <div className='call-from'>{from}</div>

      <div className='call-description description-box'>
        <div className='call-date-container'>
          <span className='date'>{formatDate(new Date(createdTime))}</span>
        </div>
        <div className='time-descrption'>
          <span className='time'>{formatAMPM(new Date(createdTime))}</span>
          <span className='description'>{generateCallDescription(from, type, to, via, false)}</span>
          <span className='duration'>{formatSecond(duration)}</span>
        </div>
      </div>


      <div className='archive-button-container'>
        {archived === false &&
          <div className='archive-button' onClick={() => handleArchive(archived)}>
            <span>Archive Call</span>
            <FontAwesomeIcon icon={faBox} />
          </div>
        }
        {archived === true &&
          <div className='archive-button' onClick={() => handleArchive(archived)}>
            <span>Unarchive Call</span>
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
        }
      </div>

    </div>
  )
}


export default CallDetails  