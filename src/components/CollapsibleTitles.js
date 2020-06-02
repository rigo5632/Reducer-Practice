import React from 'react';

const CollapsibleTitle = ({ tabs }) => {
    return (
        <ul className="list-group">
            {tabs.map(tab =>{
                const { header, id } = tab;
                return(
                    <li key={ id } className="list-group-item">
                        { header }
                    </li>
                );
            })}
        </ul>
     );
}
 
export default CollapsibleTitle;