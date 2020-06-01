import React, { createContext, useReducer } from 'react';
import { TabReducer } from '../reducers/TabReducer';

export const TabContext = createContext();

const TabContextProvider = (props) => {
    let [tabs, dispatch] = useReducer(TabReducer, [
        { 
            title: 'Tab-1',
            content: `There was a time when he would have embraced the change that was coming.
            In his youth, he sought adventure and the unknown, but that had been years ago. 
            He wished he could go back and learn to find the excitement that came with change but it was useless. 
            That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.`,
            display: false,
            id: 1
        },
        { 
            title: 'Tab-2',
            content: `He heard the crack echo in the late afternoon about a mile away. His 
            heart started racing and he bolted into a full sprint. "It wasn't a gunshot, it wasn't a gunshot,"
            he repeated under his breathlessness as he continued to sprint.`,
            display: false,
            id: 2 
        },
        { 
            title: 'Tab-3',
            content: `A long black shadow slid across the pavement near their feet and the five Venusians,
            very much startled, looked overhead. They were barely in time to see the huge gray form of 
            the carnivore before it vanished behind a sign atop a nearby building which bore the mystifying 
            information "Pepsi-Cola."`,
            display: false,
            id: 3 
        },
        { 
            title: 'Tab-4', 
            content: `It seemed like it should have been so simple. There was nothing inherently 
            difficult with getting the project done. It was simple and straightforward enough that even a child 
            should have been able to complete it on time, but that wasn't the case. The deadline had arrived
            and the project remained unfinished.`,
            display: false,
            id: 4 
        },
        { 
            title: 'Tab-5',
            content: `There was a time when he would have embraced the change that was coming.
            In his youth, he sought adventure and the unknown, but that had been years ago. 
            He wished he could go back and learn to find the excitement that came with change but it was useless. 
            That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.`,
            display: false,
            id: 5
        },
        { 
            title: 'Tab-6',
            content: `He heard the crack echo in the late afternoon about a mile away. His 
            heart started racing and he bolted into a full sprint. "It wasn't a gunshot, it wasn't a gunshot,"
            he repeated under his breathlessness as he continued to sprint.`,
            display: false,
            id: 6
        },
        { 
            title: 'Tab-7',
            content: `A long black shadow slid across the pavement near their feet and the five Venusians,
            very much startled, looked overhead. They were barely in time to see the huge gray form of 
            the carnivore before it vanished behind a sign atop a nearby building which bore the mystifying 
            information "Pepsi-Cola."`,
            display: false,
            id: 7
        },
        { 
            title: 'Tab-8', 
            content: `It seemed like it should have been so simple. There was nothing inherently 
            difficult with getting the project done. It was simple and straightforward enough that even a child 
            should have been able to complete it on time, but that wasn't the case. The deadline had arrived
            and the project remained unfinished.`,
            display: false,
            id: 8
        }
    ])

    return ( 
        <TabContext.Provider value={{tabs, dispatch}}>
            {props.children}
        </TabContext.Provider>
     );
}
 
export default TabContextProvider;