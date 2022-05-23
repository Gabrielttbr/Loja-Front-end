import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Feedback from "react-bootstrap/Feedback";
import { Container, Form, Button } from "react-bootstrap";

//import css
import "./style.css";
export default function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null); 
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
      if (form.checkValidity() === true) {
        console.log(JSON.stringify({email: email, senha: senha})  )
        fetch('http://localhost:3000/usuario/login', {
          method: "POST",
      
          body: JSON.stringify({email: email, senha: senha})       
      }).then( (e) => { console.log(e)})
      .catch((e) => {console.log(e)})
    }
    }

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
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => {setEmail(e.target.value)}}
                />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="input-form"
                  type="password"
                  placeholder="password"
                  required
                  onChange={(e) => { setSenha(e.target.value)}}
                />
              </Form.Group>

              <button type="submit">login</button>
            </Form>
          </div>
        </div>
      </section>
    );
}
