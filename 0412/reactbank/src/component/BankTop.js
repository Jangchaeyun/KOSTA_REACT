import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./BankTop.css";

const BankTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="http://cherrybank.com">
          <i>
            <b>Cherry Bank</b>
          </i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/join">회원가입</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                계좌
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link to={"/makeaccount"} className="acc-item">
                    계좌 개설
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/deposit"} className="acc-item">
                    입금
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/withdraw"} className="acc-item">
                    출금
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/accountinfo"} className="acc-item">
                    계좌 조회
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/allaccountinfo"} className="acc-item">
                    전체 계좌조회
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>로그아웃</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default BankTop;
