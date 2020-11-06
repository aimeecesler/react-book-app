import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import errorImg from "../../images/error.png";
import "./NotFound.css"

const NotFound = () => {
    return (
<Container>
    <Row>
        <div className="col-sm-12 text-center mt-5">
            <h1 className="error-header">404 ERROR</h1>
            <img src={errorImg} alt="404 error"/>
        </div>
    </Row>
</Container>
    );
};

export default NotFound;