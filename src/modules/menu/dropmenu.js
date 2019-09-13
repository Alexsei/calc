import React from 'react';
import {  Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

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

          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Математика
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/matematika">Математика</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/matematika/5klass">5 Класс</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/matematika/6klass">6 Класс</DropdownItem>

            </DropdownMenu>
          </Dropdown>
    );
  }
}
