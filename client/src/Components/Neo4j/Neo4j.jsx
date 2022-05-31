import React from 'react'
import './index.css'
import Left from './Left/index';
import Right from './Right/index';
import Middle from './Middle/index'



const Neo4j = () => {
  return (
    <>
      <div className='main'>
        <div className='pannel' style={{ flexGrow: 3 }}><Left /></div>
        <div className='pannel' style={{ flexGrow: 7 }}><Middle/></div>
        <div className='pannel' style={{ flexGrow: 2 }}><Right/></div>
      </div>
    </>
  )
}
export default Neo4j
