import React from "react"
import Navbar from "./Navbar"

const Layout = props => {
  return (
    <>
      <Navbar />
      <div className="container">{props.children}</div>
    </>
  )
}

export default Layout
