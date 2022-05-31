import "../style.css";
import { useState } from 'react';
import {templateData} from "./templateData";
// import 

function Template(props) {
    const [template, setTemplate] = useState();

    return (
        <div>
            {templateData?.map((template) => {

                if (template.id == props?.templateID) {
                    return ( <template.Component key={template.id} />);
                }

            })}
        </div>

    );
}

export default Template;