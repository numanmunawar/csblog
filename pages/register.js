
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import nav from '../components/nav'



const register = () => (

<div >
    <nav />
    <div className="loginpage" >
        <Form   >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                login
            </Button>
        </Form>
    </div>


    {/* <style jsx>{`
        .loginpage {
            dispaly: flex;
            justify-Content :center;
            align-Items:center;
            margin: 0;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
            
            

        `}
    </style> */}
</div>

);


export default register;

