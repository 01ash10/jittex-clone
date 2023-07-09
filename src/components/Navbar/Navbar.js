import React from 'react'
import "./Navbar.css" ;



function Navbar() {


  return (

    <div className='navbar'>
       <img className='logo' src={process.env.PUBLIC_URL + "logo1.png"} width="80" alt="Logo" />
        <img className='Avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="Avatar"/>
        <logo/>
        
    </div>
  )
}

export default Navbar
