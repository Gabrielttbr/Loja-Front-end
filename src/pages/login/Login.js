import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Feedback from "react-bootstrap/Feedback";
import { Container, Form, Button } from "react-bootstrap";

//import css
import "./style.css";
export default function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section className="login">
      <div className="login-page">
        <div className="form">
          <Form
            className="login-form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input-form"
                type="text"
                placeholder="Usuário"
                required
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input-form"
                type="password"
                placeholder="password"
                required
              />
            </Form.Group>

            <button type="submit">login</button>
          </Form>
        </div>
      </div>
    </section>
  );
}
