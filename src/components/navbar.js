import React from "react"
import navbarStyles from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={navbarStyles.navbar}>
      <ul>
        <li>
          <a class="active" href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
