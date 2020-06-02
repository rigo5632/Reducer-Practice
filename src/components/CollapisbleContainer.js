import React from 'react';
import CollapsibleTitle from './CollapsibleTitles';
import CollapisbleContent from './CollapsibleContent';

const CollapisbleContainer = ({ dynamicData, content }) => {
    return ( 
        <div className="row">
            <div className="col-12 col-md-6">
                <CollapsibleTitle tabs={ dynamicData }/>
            </div>
            <div className="col-12 col-md-6">
                <CollapisbleContent content={ content }/>
            </div>
        </div>
     );
}
 
export default CollapisbleContainer;