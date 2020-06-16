import React from "react"
import footerStyles from "./footer.module.css"

export default function Footer({ children }) {
  return <footer className={footerStyles.footer}>{children}</footer>
}
