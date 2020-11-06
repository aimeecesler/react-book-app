import React from 'react';
import Row from "../../components/Row/Row";
import logo from "../../images/BookBadger.png";
import "./LogoHeader.css";

const LogoHeader = () => {
    return (
        <Row>
        <div className="col-sm-12 text-center logo-bg pt-3 pb-4">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </Row>
    );
};

export default LogoHeader;