import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/components_css/CallsDisplayList.css'

import CallsDisplayListItem from './CallsDisplayListItem.jsx'



const CallsDisplayList = (props) => {

  const { content } = props

  const [callsData, setCallsData] = useState()
  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        console.log(res.data)
        setCallsData(res.data)
      })
  }, [])


  return (
    <div className='display-list-container'>
      {content === 'calls' && callsData &&
        callsData.map((call, index) => {
          return (
            <CallsDisplayListItem
              key={index}
              createdTime={call.created_at}
              from={call.from}
              to={call.to}
              via={call.via}
              duration={call.duration}
              type={call.call_type}
              direction={call.direction}
              archived={call.is_archived}
            />
          )
        })
      }

      {content === 'archive' && callsData &&
        callsData.map((call, index) => {
          if (call.is_archived) {
            return (
              <CallsDisplayListItem
                key={index}
                createdTime={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
                duration={call.duration}
                type={call.call_type}
                direction={call.direction}
                archived={call.is_archived}
              />
            )
          }
        })
      }

      {content === 'inbox' && callsData &&
        callsData.map((call, index) => {
          if (!call.is_archived) {
            return (
              <CallsDisplayListItem
                key={index}
                createdTime={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
                duration={call.duration}
                type={call.call_type}
                direction={call.direction}
                archived={call.is_archived}
              />
            )
          }
        })
      }
    </div>
  )
};

export default CallsDisplayList;