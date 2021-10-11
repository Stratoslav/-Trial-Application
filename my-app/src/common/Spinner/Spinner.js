import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

const SpinnerLoader = () => {
    return(
        <Spinner
        style={{ fontSize: '30px' }}
        animation="grow"
        variant="dark"
      ></Spinner>
    )
}

export default SpinnerLoader;