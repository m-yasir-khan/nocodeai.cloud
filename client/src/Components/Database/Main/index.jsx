import React from 'react'
import LeftPanel from './LeftPanel'
import MidPanel from './MidPanel'
import RightPanel from './RightPanel'
const DBPanel = () => {
    return (
            <div className="flex_container">
                <div className="flex_item_left"><LeftPanel /></div>
                <div className="flex_item_mid"><MidPanel /></div>
                <div className="flex_item_right"><RightPanel /></div>
            </div>
    )
}

export default DBPanel