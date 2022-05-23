import React from "react";
import { Navigate } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Feedback from "react-bootstrap/Feedback";
import { Container, Form, Button, Alert } from "react-bootstrap";

//import css
import "./style.css";
export default function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [RedirectTo, setRedirectTo] = useState(null);
  const [AlertErro, setAlertErro] = useState(null)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        email: email,
        senha: senha,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/usuario/login", requestOptions)
        .then((response) => response.json())
        .then((result) =>{
          if(result.usuarioValid == true){
            // Se os dados baterem 
            console.log("Usuário logado")
            return setRedirectTo('/home')
          }else{
            // Se não
            console.log("Usuário não logado")
        }
        } )
          
        .catch((error) => {
          setAlertErro(true)
          console.log("Erro")
        });
    }
  };
  if(RedirectTo != null){
    return (
      <Navigate to={RedirectTo} ></Navigate>
    )

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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="input-form"
                type="password"
                placeholder="password"
                required
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </Form.Group>
            {
              AlertErro === true ? 
              <Alert key='danger' variant='danger'>
              This is a  alert—check it out!
            </Alert>
            : <p> </p>}
            <button type="submit">login</button>
          </Form>
        </div>
      </div>
    </section>
  );
}
