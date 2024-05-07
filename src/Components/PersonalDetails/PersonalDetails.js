import './PersonalDetails.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Form, Button, Spinner } from "react-bootstrap";

const PersonalDetails = () => {
    return <div className='container'>
        <div className='row'>
            <div className='col-lg-3 col-md-4 col-xs-6'>
                <Form.Group>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control type="text" name="userID" id='userID' />
                </Form.Group>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
                <Form.Group>
                    <Form.Control type="text" name="userID" id='userID' />
                </Form.Group>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
                <Form.Group>
                    <Form.Control type="text" name="userID" id='userID' />
                </Form.Group>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
                <Form.Group>
                    <Form.Control type="text" name="userID" id='userID' />
                </Form.Group>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
                <Form.Group>
                    <Form.Control type="text" name="userID" id='userID' />
                </Form.Group>
            </div>
        </div>
    </div>
};

export default PersonalDetails;