import React from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './AddItemButton.css'

export default function AddItemButton() {
    return (
        <div>
            <h1>Add Item</h1>
            <Container>
                <Form.Group className='form-size'> 
                    <Form.Label>Item </Form.Label>
                    <Form.Control
                    className="form-detail"
                    value=""
                    onchange=""
                    type="text"
                    placeholder=""
                    required
                    />
                </Form.Group >
                <Form.Group className='form-size'>
                    <Form.Label>Quantity </Form.Label>
                    <Form.Control
                    className="form-detail"
                    value=""
                    onchange=""
                    type="text"
                    placeholder=""
                    required
                    />
                </Form.Group>
                <Form.Group className='form-size'>
                    <Form.Label>Expiration date </Form.Label>
                    <Form.Control
                    className="form-detail"
                    value=""
                    onchange=""
                    type="date"
                    placeholder=""
                    required
                    />
                </Form.Group>
                <Form.Group >
                    <Button className="myButton">
                    Submit
                    </Button>
                </Form.Group>
            </Container>
        </div>
    )
}
