import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DataDisplay() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'outsideOrganization')} draggable>
                <constants.RiOrganizationChart className='sidebar-icons' /><span>Outside Organization</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'processNode')} draggable>
                <constants.BiRectangle className='sidebar-icons' /><span>Process Block</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'dataBlock')} draggable>
                <constants.AiOutlineDatabase className='sidebar-icons' /><span>Data Block</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'itSystem')} draggable>
                <constants.FaLaptop className='sidebar-icons' /><span>IT System</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'worker')} draggable>
                <constants.MdOutlineWorkOutline className='sidebar-icons' /><span>Worker</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'manualInformationFlow')} draggable>
                <constants.BsArrowsExpand className='sidebar-icons' /><span>Manual Information Flow</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'automatedInformationFlow')} draggable>
                <constants.BsCodeSlash className='sidebar-icons' /><span>Automated Information Flow</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'phone')} draggable>
                <constants.AiOutlinePhone className='sidebar-icons' /><span>Phone</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'mail')} draggable>
                <constants.AiOutlineMail className='sidebar-icons' /><span>Mail</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'faxMachine')} draggable>
                <constants.FaFax className='sidebar-icons' /><span>Fax Machine</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'inbox')} draggable>
                <constants.AiOutlineInbox className='sidebar-icons' /><span>Inbox</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'pushSystem')} draggable>
                <constants.VscArrowRight className='sidebar-icons' /><span>Push System</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'inventory')} draggable>
                <constants.AiOutlineWarning className='sidebar-icons' /><span>Inventory</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'controlledFifo')} draggable>
                <constants.BsStackOverflow className='sidebar-icons' /><span>Controlled FIFO</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'kanban')} draggable>
                <constants.BsKanban className='sidebar-icons' /><span>Kanban</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'goSee')} draggable>
                <constants.BsEyeglasses className='sidebar-icons' /><span>Go-see Scheduling</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'truckMovement')} draggable>
                <constants.GiTruck className='sidebar-icons' /><span>Truck Movement</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'kaizenBurst')} draggable>
                <constants.TiStarburstOutline className='sidebar-icons' /><span>Kaizen Burst</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'withdrawal')} draggable>
                <constants.AiOutlineRedo className='sidebar-icons' /><span>Withdrawal</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'materialReciept')} draggable>
                <constants.VscArrowRight className='sidebar-icons' /><span>Material Reciept & Shipment</span>
            </div>
        </>
    )
}
