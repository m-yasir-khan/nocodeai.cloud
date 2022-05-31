import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import './index.css';
import {GoDatabase} from 'react-icons/go';


const Dbicon = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <>
              <GoDatabase onClick={showModal}/>
        <Modal/>
        
      <Modal title="Neo4j" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Connect"
        cancelText="Cancel"
>
        <Input className='input_modal1' placeholder="Database Name" />
        <Input className='input' placeholder="Password" />
      </Modal>
    </>
  )
}

export default Dbicon
