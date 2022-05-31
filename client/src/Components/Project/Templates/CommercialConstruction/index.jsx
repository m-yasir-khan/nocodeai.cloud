
import { useState } from 'react';

function CommercialConstruction(props) {
    const [template,setTemplate] = useState();
    return (
        <div style={{width:'100%'}}>
            <div className='project'><label>Commercial Construction</label></div>
        </div>
    );
}

export default CommercialConstruction;