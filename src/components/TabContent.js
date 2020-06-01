import React from 'react';

const TabContent = ({content}) => {
    return ( 
        <span className="text-white">
            <strong>
                {content}
            </strong>
        </span>
     );
}
 
export default TabContent;