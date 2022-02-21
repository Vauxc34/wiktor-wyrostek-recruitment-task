import React, { useState, useEffect } from 'react';
import ActualData from './ActualData.json'
import axios from 'axios'

const Main = () => {

  const [TableInfo, setTableInfo] = useState(ActualData.response.data)
  const [finder, setFinder] = useState('')

  useEffect(() => {
     
    


  }, [])

  console.log(ActualData.response.data.filter(item => item.description.toLowerCase().includes('f')));

  return (
    
    <>
    
    <input type="search" name="finder" placeholder='search...' 
    value={finder}
    onChange={(e) => setFinder(e.target.value)}
    />

    <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Received date</th>
          <th>Assigned to</th>
          <th>Status</th>
          <th>Priority</th>
          </tr>
        </thead>
        {TableInfo.filter(item => item.description.toLowerCase().includes(finder)).map((item, key) => (
           <tbody key={key}>
           <tr>
           <td>{item.work_order_id}</td>
           <td>{item.description}</td>
           <td>{item.received_date}</td>
          
           <td>{item.status}</td>
           <td>{item.priority}</td>
           </tr>
         </tbody>
        ))}
    </table>

    </>
  )
}

export default Main