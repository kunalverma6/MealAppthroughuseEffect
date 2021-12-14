import React from 'react'
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar = () => {
    return (
        <div className="row justify-content-center " style={{backgroundColor:'red', textAlign:'center'}}>
     
            <h1>THE MEALS</h1>
            <a style={{margin:'10px', color:'white' }}>HOME</a>
            <a style={{margin:'10px', color:'white'}}>ORDER</a>
            <a style={{margin:'10px', color:'white'}}>CONTACT US</a>
            
            
        </div>
    )
}

export default Navbar
