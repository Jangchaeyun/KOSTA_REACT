import { useState } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ReactstrapDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>버튼 DropDown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>헤더</DropdownItem>
        <DropdownItem disabled>비활성화 버튼</DropdownItem>
        <a href="http://naver.com">
          <DropdownItem>네이버 사이트로 이동</DropdownItem>
        </a>
        <DropdownItem onClick={(e) => alert("Alert버튼")}>
          Alert 버튼
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default ReactstrapDropdown;
