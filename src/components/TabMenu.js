import React, { useContext, useState } from 'react';
import { TabContext } from '../contexts/TabContext';
import TabContent from './TabContent';

const TabMenu = () => {
    const{tabs, dispatch} = useContext(TabContext);
    const[content, setContent] = useState('');

    const updateContent = (content, id) =>{
        const tabIndex = tabs.findIndex(tab => tab.id === id);
        dispatch({type: 'SWITCH_DISPLAY', id: tabIndex, counter: 0});
        setContent(tabs[tabIndex].display ? content : '');
    }

    return (
        <div className="row">
            <ul className="list-group col-4 border border-primary">
                {tabs.map(tab => {
                    const{title, content, display, id} = tab;
                    return(
                        <li className="list-group-item border border-primary bg-primary" key={id}>
                            <button type="button" className="btn" onClick={() => {updateContent(content, id)}}>
                                <h6 className={display ? 'text-warning' : 'text-white'}>
                                    {title}
                                </h6>
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="col-8">
                <TabContent content={content}/> 
            </div>

        </div>
    );
}
 
export default TabMenu;