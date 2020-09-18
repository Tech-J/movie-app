import React from 'react'
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { useDispatch } from 'react-redux';
import allActions from '../actions/index'



function ProfileButton() {
  const dispatch = useDispatch()

  return (
    <Nav>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <i className="far fa-user-circle fa-2x"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={()=>{dispatch(allActions.authActions.logOut())}}>
            LogOut
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  )
}

export default ProfileButton
