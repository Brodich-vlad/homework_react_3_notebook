import React from "react";
import logo from "../../image/logo.jpg";
import Img from "../img";

function Header(){
    return(
        <header className="header">
            <div className="header-nav">
                <a href='./' className="header-logo">
                    <Img src={logo} alt={"logo"}/>
                </a>
                <h1 className="header-title">Домашня робота 'React' №3 Влад Бродич</h1>
            </div>
        </header>
    )
};

export default Header;