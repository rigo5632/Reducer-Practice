import React from 'react';
import CollapsibleTitle from './CollapsibleTitles';
import CollapisbleContent from './CollapsibleContent';

const CollapisbleContainer = ({ collapsibleInfo, styles, content }) => {
    return ( 
        <div className={styles.container}>
            <div className="col-12 col-md-6">
                <CollapsibleTitle tabs={ collapsibleInfo } styles={ styles }/>
            </div>
            <div className="col-12 col-md-6">
                <CollapisbleContent content={ content }/>
            </div>
        </div>
     );
}
 
export default CollapisbleContainer;