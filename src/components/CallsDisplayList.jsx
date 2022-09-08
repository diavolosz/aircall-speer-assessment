import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/components_css/CallsDisplayList.css'

import CallsDisplayListItem from './CallsDisplayListItem.jsx'
import CallDetails from './CallDetails.jsx';
import ArchieveAllCallsButton from './ArchieveAllCallsButton.jsx'

const CallsDisplayList = (props) => {

  const { content, setContent } = props
  const [callsData, setCallsData] = useState()
  const [callDisplayDetails, setallDisplayDetails] = useState()


  const handleCallSelection = (callId) => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${callId}`)
      .then((res) => {
        setContent('callDisplay')
        setallDisplayDetails(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        setCallsData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [content])




  return (
    <div className='display-list-container'>
      {content === 'inbox' && <ArchieveAllCallsButton setContent={setContent} content={content} callsData={callsData}/>}
      {content === 'calls' && <ArchieveAllCallsButton setContent={setContent} content={content} callsData={callsData}/>}

      {content === 'callDisplay' && callDisplayDetails &&
        <CallDetails
          id={callDisplayDetails.id}
          createdTime={callDisplayDetails.created_at}
          from={callDisplayDetails.from}
          to={callDisplayDetails.to}
          via={callDisplayDetails.via}
          duration={callDisplayDetails.duration}
          type={callDisplayDetails.call_type}
          direction={callDisplayDetails.direction}
          archived={callDisplayDetails.is_archived}
          setContent={setContent}
        />
      }

      {content === 'calls' && callsData &&
        callsData.map((call, index) => {
          if (call.is_archived === false) {
            return (
              <CallsDisplayListItem
                key={index}
                id={call.id}
                createdTime={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
                duration={call.duration}
                type={call.call_type}
                direction={call.direction}
                archived={call.is_archived}
                handleCallSelection={handleCallSelection}
              />
            )
          }
        })
      }

      {content === 'archive' && callsData &&
        callsData.map((call, index) => {
          if (call.is_archived === true) {
            return (
              <CallsDisplayListItem
                key={index}
                id={call.id}
                createdTime={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
                duration={call.duration}
                type={call.call_type}
                direction={call.direction}
                archived={call.is_archived}
                handleCallSelection={handleCallSelection}
              />
            )
          }
        })
      }

      {content === 'inbox' && callsData &&
        callsData.map((call, index) => {
          if (call.direction === 'inbound' && call.is_archived === false) {
            return (
              <CallsDisplayListItem
                key={index}
                id={call.id}
                createdTime={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
                duration={call.duration}
                type={call.call_type}
                direction={call.direction}
                archived={call.is_archived}
                handleCallSelection={handleCallSelection}
              />
            )
          }
        })
      }
    </div>
  )
};

export default CallsDisplayList;