import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <h4 className="navbar-brand">texteditor</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.place1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.place2}</Link>
        </li>
        
      </ul>
   <div style={{
    display:'flex',
    gap:'1%'
   }}>
   <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Lightmode</label>
   <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.handlemode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Darkmode</label>
</div>
   </div>
    </div>
  </div>
</nav>
</>
  )
}
