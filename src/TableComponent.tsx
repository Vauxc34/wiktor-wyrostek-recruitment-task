import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { TableInfos } from './model'

const TableComponent: React.FC = () => {

  const [TableInfo, setTableInfo] = useState<TableInfos[]>([])
  const [finder, setFinder] = useState('')

  useEffect(() => {
    axios.get<TableInfos[]>('ActualData.json').then((firstRes: AxiosResponse) => {
      setTableInfo(firstRes.data.response.data)
    })
  }, [])

  return (
    
    <>

    <div className='blur-bgc' />
    
    <input type="search" className='search-bar' name="finder" placeholder='search... 🔎👀' 
    value={finder}
    onChange={(e) => setFinder(e.target.value)}
    />

    <table>
        <thead>
          <tr>
          <th><p>ID</p></th>
          <th><p>Description</p></th>
          <th><p>Received date</p></th>
          <th><p>Assigned to</p></th>
          <th><p>Status</p></th>
          <th><p>Priority</p></th>
          </tr>
        </thead>
        {TableInfo.filter(item => item.description.toLowerCase().includes(finder)).map((item, key) => (
           <tbody key={key}>
           <tr>
           <td className='id-workers'><p>{item.work_order_id}</p></td>
           <td><p>{item.description}</p></td>
           <td><p>{item.received_date}</p></td>
           <td>
              {item.assigned_to.map((item, anotherKey) => (
              <p key={anotherKey}>
              {`${item.person_name} / ${item.status}`}
              </p>
              ))}
           </td>
           <td><p>{item.status}</p></td>
           <td><p>{item.priority}</p></td>
           </tr>
         </tbody>
        ))}
    </table>

    </>
  )
}

export default TableComponent