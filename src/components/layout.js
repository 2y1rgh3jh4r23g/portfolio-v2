import React from "react"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer>2020 &copy; Kirill Anisimov</Footer>
    </div>
  )
}
