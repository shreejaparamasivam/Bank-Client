import React, { useState } from "react";
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('https://bank-server-nm3b.onrender.com/create', item)
        alert("Submitted Successfully");
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-sm text-center" style={{ width: '400px', backgroundColor: '#f9f9f9' }}>
                <Card.Body>
                    <Card.Title className="mb-3">Register</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Control
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control
                                type="password"
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
