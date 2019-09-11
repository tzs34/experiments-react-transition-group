import React, { useState }  from 'react'
import {
  Container,
  MenuContainer,
  Toggler,
  List,
  ListItem,
  Menu,
} from './styled-component-examples'
console.log(Container)
const StyledMenu = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (

        <Container>
        <MenuContainer>
        <Toggler
          active={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </Toggler>
        <Menu
          in={showMenu}
          timeout={350}
          unmountOnExit
        >
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Profile</ListItem>
            <ListItem>Favorites</ListItem>
            <ListItem>Sign out</ListItem>
          </List>
        </Menu>
        </MenuContainer>
    
      </Container>
    )
}

export default StyledMenu