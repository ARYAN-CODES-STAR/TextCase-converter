import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  let myStyle = {
    color:red;
    background-color:yellow;

  }
  return (
    <>
   
        <nav className="navbar navbar-expand-lg bg-light={myStyle} style">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Tech Used</a>
        </li>
       
      </ul>
      
    </div>
    <div className="form-check form-switch form-check-reverse">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
  <label className="form-check-label" for="flexSwitchCheckReverse">Enable Dark mode</label>
</div>
  </div>
</nav>


{/* <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label htmlFor="floatingTextarea2">Comments</label>
</div> 

<button type="button" className="btn btn-primary">Click to uppercase</button> */}
    </>
    
  )
}
Navbar.propTypes = {title:PropTypes.string
}