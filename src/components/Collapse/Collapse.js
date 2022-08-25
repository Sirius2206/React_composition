import React, { useState } from 'react';
import Button from './Button';
import './Collapse.css'

function Collapse() {
    const [isVisible, setVisible] = useState(false);

    function toggle() {
        setVisible(!isVisible);
    }
    
    return (
        <>
        <Button isVisible={isVisible} toggle={toggle}>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Deserunt aperiam, eveniet 
                    ab nostrum distinctio eum eaque veritatis sapiente. 
                    Illo, amet atque at aliquam doloremque rerum illum 
                    provident consequuntur dignissimos sequi!
                </p>
            </div>
        </Button>
        <div>
            <p>А дальше какой-нибудь другой контент</p>
            <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Deserunt aperiam, eveniet 
                    ab nostrum distinctio eum eaque veritatis sapiente. 
                    Illo, amet atque at aliquam doloremque rerum illum 
                    provident consequuntur dignissimos sequi!
                </p>
        </div>
        </>
    )
}

export default Collapse;
