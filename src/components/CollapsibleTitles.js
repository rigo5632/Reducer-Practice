import React, { Fragment } from 'react';

const CollapsibleTitle = ({ tabs, styles }) => {
    return (
        <div className={styles.titleListGroup}>
            {tabs.map(tab =>{
                const { title , id } = tab;
                return(
                    <Fragment key={id}>
                        {title}  
                    </Fragment>
                );
            })}
        </div>
     );
}
 
export default CollapsibleTitle;