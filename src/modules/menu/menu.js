import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import DropMenu from './dropmenu';

export default class Menu extends React.Component {
    render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/">Главная</NavLink>
          </NavItem>
          <DropMenu />
        
        </Nav>
      </div>
    );
  }
}
