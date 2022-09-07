import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/components_css/CallsDisplayList.css'

import CallsDisplayListItem from './CallsDisplayListItem.jsx'



const CallsDisplayList = (props) => {

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
      {callsData && 
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
    </div>
  )
};

export default CallsDisplayList;