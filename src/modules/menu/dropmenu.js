import React from 'react';
import {  NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class DropMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Математика
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/matematika/1klass">1 Класс</DropdownItem>
              <DropdownItem href="/matematika/2klass">2 Класс</DropdownItem>
              <DropdownItem href="/matematika/3klass">3 Класс</DropdownItem>
              <DropdownItem href="/matematika/4klass">4 Класс</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/matematika/5klass">5 Класс</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/matematika/6klass">6 Класс</DropdownItem>
              <DropdownItem divider />
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
    );
  }
}
