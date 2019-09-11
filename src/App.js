/* Using react-transition-group for effects like fading and so on
   Notes:

*/
import React, {useState, useRef} from 'react';
import { CSSTransition }  from 'react-transition-group'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Header from './components/header'
import MenuList from './components/menuList'
import SearchPanel from './components/searchPanel'
import ItemsList from './components/itemsList'
import RouterMenu from './components/routingMenu'
import StyledMenu from './components/styled-menu'

import './App.css';


function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showSideBar , setShowSideBar] = useState(false)
  const {current:items}= useRef(['Home', 'Profile', 'Favourites'])

  function toggleMenu(){
    setShowMenu(!showMenu)
   }

   function toggleSideBar(){
    setShowSideBar(!showSideBar)
   }

  return (
      <div className="App">
          <Header title='React Transition Group Examples' />
      <div className='menu-list'>
          <button onClick={toggleMenu}> Menu</button>
            <CSSTransition 
            in={showMenu} 
            timeout={400} 
            classNames='menu-example'
            unmountOnExit
            onEnter={() => {console.log('on my way')}}
            onEntering={() => {console.log('nearly there')}}
            onEntered={()=> {console.log('onEntered')}}
            onExit={() => {console.log('Got to go')}}
            onExiting={() => {console.log('Bye Bye')}}
            onExited={()=> {console.log('on exited')}}
            >
              <MenuList items={items}/>
            </CSSTransition>
          </div>
          <div>
          <button onClick={toggleSideBar}> SideBar</button>
            <CSSTransition
              in={showSideBar} 
              timeout={400} 
              classNames='panel'
              unmountOnExit
            >
              <SearchPanel />
            </CSSTransition>
          </div>
          <div className='items-list-box'>
            <ItemsList items={items} />
          </div>
          <div>
            <Header title='Example of using transtioning and routing' />
          </div>
          <div>
            <RouterMenu items={items} />
          </div>
          <div>
            <StyledMenu />
          </div>
      </div>
  );
}

export default App;
