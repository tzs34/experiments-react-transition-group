import React, {useState, useEffect} from 'react';
import { CSSTransition, TransitionGroup }  from 'react-transition-group'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import Home from './pages/home';
import Profile from './pages/profile';
import Favorites from './pages/favorites';

import '../routing-menu.css'

const RoutingMenu = () => (
    <Router>
    <Route component={Menu} />
  </Router>
)


const Menu = ({location}) => {

    const [showMenu, setShowMenu] = useState(false)
    
    function handleLinkOnClick(e, path) {
        if(path === location.pathname){
            e.preventDefault()
        }
    }

    return (
        <div className='container'>
        <button
          className='toggler'
          onClick={() => {setShowMenu(!showMenu)}}
        >
          Menu
        </button>
        <CSSTransition
          in={showMenu}
          timeout={350}
          classNames='balloon'
          unmountOnExit
        >
          <div className='menu'>
            <ul className='list'>
              <li className='list-item'>
                <Link to='/' onClick={(e) => handleLinkOnClick(e, '/')}>Home</Link>
              </li>
              <li className='list-item'>
                <Link to='/profile' onClick={(e) => handleLinkOnClick(e, '/profile')}>Profile</Link>
              </li>
              <li className='list-item'>
                <Link to='/favorites' onClick={(e) => handleLinkOnClick(e, '/favorites')}>Favorites</Link>
              </li>
              <li className='list-item'>Sign out</li>
            </ul>
          </div>
        </CSSTransition>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames='swipe'
            timeout={500}
          >
            <div className='swipe-container'>
              <Switch location={location}>
                <Route
                  exact
                  path='/'
                  component={Home}
                />
                <Route
                  exact
                  path='/profile'
                  component={Profile}
                />
                <Route
                  exact
                  path='/favorites'
                  component={Favorites}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )

}


export default RoutingMenu 
