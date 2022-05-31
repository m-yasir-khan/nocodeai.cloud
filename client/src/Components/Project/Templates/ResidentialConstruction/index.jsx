
import { useState } from 'react';

function ResidentialConstruction(props) {
    const [template,setTemplate] = useState();
    return (
        <div style={{width:'100%'}}>
            <div className='project'><label>Residential Construction</label></div>
        </div>
    );
}

export default ResidentialConstruction;