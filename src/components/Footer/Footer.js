import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.scss'

function Footer(props) {
    return (
        <div className="footer">

            <span className="icons">
                <i className="fab fa-github"> </i>

            </span>
            <p className="smg">
                <i className="fa fa-copyright" aria-hidden="true" />  2019 Design by  <a href="https://tagtandreig.000webhostapp.com/">TAG</a>

            </p>
        </div>
    )
}

export default Footer;