import React, {useState} from 'react';
import AppCards from './components/CardsTask/AppCards';
import Decomp from './components/decomposition';
import Collapse from './components/Collapse/Collapse';

import './App.css';

function App() {
  const [app, setApp] = useState(<Decomp />);
  const [currentClass, setCurrentClass] = useState("decomposition");
  const apps = [
    {
      name: "cards",
      component: <AppCards />
    },
    {
      name: "decomposition",
      component: <Decomp />
    },
    {
      name: "coll",
      component: <Collapse />
    }
  ]

  const handleClick = e => {
    const curApp = apps.find(item => item.name === e.target.className);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  }
  
  return (
    <div>
      <header className="header_main">
        <button className='cards' onClick={handleClick}>Задание №1(Карточки)</button>
        <button className='decomposition' onClick={handleClick}>Задание №2(Гундекс)</button>
        <button className="coll" onClick={handleClick}>Задание №3(Collapse)</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;