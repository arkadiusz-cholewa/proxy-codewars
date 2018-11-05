import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const navItems = this.props.languages.map((lang,i) => (<NavItem key={i}>
      <NavLink  onClick={()=> this.props.onChange(lang)}>
        {lang}
      </NavLink>
    </NavItem>));

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">.NET PK - codewars</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navItems}
              <NavItem>
                <NavLink href="https://github.com/arkadiusz-cholewa/proxy-codewars">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
