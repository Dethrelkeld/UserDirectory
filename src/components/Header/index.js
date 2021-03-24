import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import "./style.css";

const Header = () => {
    return (
        <Jumbotron fluid className="jumbo">
            <h1>User Database</h1>
        </Jumbotron>
    )
};

export default Header;