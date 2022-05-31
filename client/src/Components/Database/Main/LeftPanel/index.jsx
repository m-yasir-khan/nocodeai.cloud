import React from 'react'
import { DBModal, SQLModal, BigQueryModal, AzureModal, MySQLModal, PostgresqlModal, MongoDBModal, OracleModal } from './components'
import { constants } from '../../../../Utils/constants';

const LeftPanel = () => {
    return (
        <div>
            <p style={{ fontSize: '20px' }}> <constants.FaLink className='sidebar-icons' />DB Connections</p>
            <div className="main_sidebar">
                <div className="sidebar_comp">
                    <AzureModal />
                </div>
                <div className="sidebar_comp">
                    <DBModal />
                </div>
                <div className="sidebar_comp">
                    <SQLModal />
                </div>
                <div className="sidebar_comp">
                    <MySQLModal />
                </div>
                <div className="sidebar_comp">
                    <PostgresqlModal />
                </div>
                <div className="sidebar_comp">
                    <BigQueryModal />
                </div>
                <div className="sidebar_comp">
                    <MongoDBModal />
                </div>
                <div className="sidebar_comp">
                    <OracleModal />
                </div>
            </div>
        </div>
    )
}

export default LeftPanel