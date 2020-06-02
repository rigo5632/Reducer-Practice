import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CollapisbleContainer from './components/CollapisbleContainer';

function App() {
  const[content, setContent] = useState();
  // const[milestoneStyles] = useState({
  //   container: 'row',
  //   titleListGroup: 'list-group',
  //   titleListGroupItems: 'list-group-item',
  //   btn: 'btn'
  // });

  const[spotlightStyles] = useState({
    container: 'row banner-2 mb-5',
    titleListGroup: 'rounded-circle imgPlaceholder',
    titleHroupListItems: '',
    content: 'text-white'
  });

  const[dataSets, setDataSets] = useState([
    {
      title: <div className={spotlightStyles.titleListGroup} onClick={() => updateDisplay(0)}>
        <h1>See more - 1</h1>
      </div>,
      content: `1: Qui ea aliqua tempor ea. Cupidatat consequat reprehenderit non adipisicing quis.
      Mollit nostrud sunt sunt ad adipisicing laboris tempor Lorem in dolore. Enim ex quis ut ipsum
      sunt esse anim consequat qui do Lorem in quis velit.`,
      display: false,
      id: 0
    },
    {
      title: <div className={spotlightStyles.titleListGroup} onClick={() => updateDisplay(1)}>
        <h1>See more - 2</h1>
      </div>,
      content: `2: Qui ea aliqua tempor ea. Cupidatat consequat reprehenderit non adipisicing quis.
      Mollit nostrud sunt sunt ad adipisicing laboris tempor Lorem in dolore. Enim ex quis ut ipsum
      sunt esse anim consequat qui do Lorem in quis velit.`,
      display: false,
      id: 1
    },
    {
      title: <div className={spotlightStyles.titleListGroup} onClick={() => updateDisplay(2)}>
        <h1>See more - 3</h1>
      </div>,
      content: `3: Qui ea aliqua tempor ea. Cupidatat consequat reprehenderit non adipisicing quis.
      Mollit nostrud sunt sunt ad adipisicing laboris tempor Lorem in dolore. Enim ex quis ut ipsum
      sunt esse anim consequat qui do Lorem in quis velit.`,
      display: false,
      id: 2
    },
    {
      title: <div className={spotlightStyles.titleListGroup} onClick={() => updateDisplay(3)}>
        <h1>See more - 4</h1>
      </div>,
      content: `4: Qui ea aliqua tempor ea. Cupidatat consequat reprehenderit non adipisicing quis.
      Mollit nostrud sunt sunt ad adipisicing laboris tempor Lorem in dolore. Enim ex quis ut ipsum
      sunt esse anim consequat qui do Lorem in quis velit.`,
      display: false,
      id: 3
    },
    // {
    //   title: 
    //   <li className={milestoneStyles.titleListGroupItems}>
    //     <button className={milestoneStyles.btn} onClick={() => updateDisplay(0)}>
    //       Tab-1
    //     </button>
    //   </li>,
    //   content: `Tab1: Adipisicing nisi adipisicing culpa commodo id sint. Laboris mollit enim magna
    //   laborum esse voluptate voluptate dolore nisi sunt incididunt dolore commodo qui. Amet
    //   enim eu enim aliquip elit aliquip voluptate id cupidatat. Aute id non deserunt laborum
    //   sit minim labore pariatur elit ex. Consequat labore tempor Lorem aliquip labore velit sit.`,
    //   display: false,
    //   id: 0
    // },
    // {
    //   title:
    //   <li className={milestoneStyles.titleListGroupItems}>
    //     <button className={milestoneStyles.btn} onClick={() => updateDisplay(1)}>
    //       Tab-2
    //     </button>
    //   </li>,
    //   content: `Tab2: Adipisicing nisi adipisicing culpa commodo id sint. Laboris mollit enim magna
    //   laborum esse voluptate voluptate dolore nisi sunt incididunt dolore commodo qui. Amet
    //   enim eu enim aliquip elit aliquip voluptate id cupidatat. Aute id non deserunt laborum
    //   sit minim labore pariatur elit ex. Consequat labore tempor Lorem aliquip labore velit sit.`,
    //   display: false,
    //   clickFunc: () => updateDisplay(1),
    //   id: 1
    // },
    // {
    //   title:
    //   <li className={milestoneStyles.titleListGroupItems}>
    //     <button className={milestoneStyles.btn} onClick={() => updateDisplay(2)}>
    //       Tab-3
    //     </button>
    //   </li>,
    //   content: `Tab3: Adipisicing nisi adipisicing culpa commodo id sint. Laboris mollit enim magna
    //   laborum esse voluptate voluptate dolore nisi sunt incididunt dolore commodo qui. Amet
    //   enim eu enim aliquip elit aliquip voluptate id cupidatat. Aute id non deserunt laborum
    //   sit minim labore pariatur elit ex. Consequat labore tempor Lorem aliquip labore velit sit.`,
    //   display: false,
    //   clickFunc: () => updateDisplay(2),
    //   id: 2
    // },
    // {
    //   title:
    //   <li className={milestoneStyles.titleListGroupItems}>
    //     <button className={milestoneStyles.btn} onClick={() => updateDisplay(3)}>
    //       Tab-4
    //     </button>
    //   </li>,
    //   content: `Tab4: Adipisicing nisi adipisicing culpa commodo id sint. Laboris mollit enim magna
    //   laborum esse voluptate voluptate dolore nisi sunt incididunt dolore commodo qui. Amet
    //   enim eu enim aliquip elit aliquip voluptate id cupidatat. Aute id non deserunt laborum
    //   sit minim labore pariatur elit ex. Consequat labore tempor Lorem aliquip labore velit sit.`,
    //   display: false,
    //   clickFunc: () => updateDisplay(3),
    //   id: 3
    // },
  ]);


  const updateDisplay = ( id ) =>{
    let counter = 0;
    const newSet = [...dataSets];
    newSet.map(data => counter++ === id ? data.display = !data.display : data.display = false);
    setDataSets(newSet);
    setContent(dataSets[id].display ? dataSets[id].content : '');
  }

   return (
    <div className="App container">
      <CollapisbleContainer collapsibleInfo={dataSets} styles={spotlightStyles} content={content}/>
    </div>
  );
}

export default App;
