import React from 'react';
import './index.css';
import Backupicon from './Backupicon';
import Dbicon from './Dbicon';
import Mysql from './Mysqlicon';
import Graphql from './Graphqlicon';
import {SiNeo4J} from 'react-icons/si'
import 'antd/dist/antd.css'

const Left = () => {
  return (
    <>
      <h3 className='heading_left'><span className='left-icons'><SiNeo4J /></span>Neo4j</h3>
      <div className='main_left'>
        <div className='left-icons' style={{flexGrow:3}}>
          <Backupicon/>
        </div>
       <div className='left-icons' style={{flexGrow:3}}>
         <Dbicon/>
       </div>
       <div className='left-icons' style={{flexGrow:3}}>
         <Mysql/>
         </div>
       <div className='left-icons' style={{flexGrow:3}}>
         <Graphql />
         </div> 
      </div>
    
     
    </>
  )
}

export default Left
