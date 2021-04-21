import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navigation = () => (
  <nav>
    <Menu>
      <Menu.Item>
        <NavLink exact to="/">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/create-post">
          Create post
        </NavLink>
      </Menu.Item>
    </Menu>
  </nav>
)

export default Navigation
