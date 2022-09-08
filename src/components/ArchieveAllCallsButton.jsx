import axios from 'axios';
import React from 'react';

import '../css/components_css/ArchieveAllCallsButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

const ArchieveAllCallsButton = (props) => {

  const { callsData, content, setContent } = props

  const handleArchiveAll = (data, type) => {

    if (type === 'inbox') {
      data.forEach((eachCall) => {
        if (eachCall.direction === 'inbound') {
          axios.post(`https://aircall-job.herokuapp.com/activities/${eachCall.id}`, { is_archived: true })
            .then(() => {
              setContent('archive')
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    } else if (type === 'calls') {
      data.forEach((eachCall) => {
        axios.post(`https://aircall-job.herokuapp.com/activities/${eachCall.id}`, { is_archived: true })
          .then(() => {
            setContent('archive')
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }

  return (
    <div className='archive-all-calls-container'>
      {content === 'inbox' &&
        < div className='archive-all-buttons' onClick={() => handleArchiveAll(callsData, content)}>
          <FontAwesomeIcon className='icon' icon={faBoxArchive} />
          <span>Archive All Inbound Calls</span>
        </div>
      }
      {content === 'calls' &&
        < div className='archive-all-buttons' onClick={() => handleArchiveAll(callsData, content)}>
          <FontAwesomeIcon className='icon' icon={faBoxArchive} />
          <span>Archive All Calls</span>
        </div>
      }
    </div >
  )
};

export default ArchieveAllCallsButton;