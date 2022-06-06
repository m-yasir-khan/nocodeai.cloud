import { constants } from '../../../../Utils/constants';
import "./style.css";

export default (props) => {

    const handleZoomIn = (e) => {
        e.stopPropagation();
        props?.baseZoom >= 200 ? props?.setBaseZoom(props?.baseZoom) : props?.setBaseZoom(props?.baseZoom + 10);
    }

    const handleZoomOut = (e) => {
        e.stopPropagation();
        props?.baseZoom <= 10 ? props?.setBaseZoom(10) : props?.setBaseZoom(props?.baseZoom - 10);
    }

    return (
        <div className='form-base-zoom'>
            <div className='form-base-zoomin-container'>
                <constants.AiOutlineZoomIn onClick={handleZoomIn} className="form-base-zoom-icons" />
            </div>
            <div className='form-base-zoomout-container'>
                <constants.AiOutlineZoomOut onClick={handleZoomOut} className="form-base-zoom-icons" />
            </div>
            <div className='form-base-zoomout-container'>
                <span style={{fontSize: '10px'}}>{props?.baseZoom}%</span>
            </div>
        </div>
    )
}