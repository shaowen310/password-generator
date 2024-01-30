import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function PasswordForm() {
  const [form, setForm] = useState({ primaryPassword: '', password: '', passwordLength: 12 });
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = JSON.stringify(form);
    axios
      .post("/api/generatePassword", reqBody, {
        headers: {
          "content-type": "application/json"
        },
      })
      .then(resp => {
        if (
          resp.data !== undefined &&
          resp.data.generatedPassword !== undefined
        ) {
          setGeneratedPassword(resp.data);
        } else {
          console.error("Invalid response");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 pt-3" controlId="primaryPassword">
          <Form.Label>Primary password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a primary password"
            value={form.primaryPassword}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            value={form.password}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordLength">
          <Form.Label>Length of the password to generate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter a length"
            value={form.passwordLength}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Generate
        </Button>
      </Form>
      <Form.Group className="mb-3 pt-3" controlId="generatedPassword">
        <Form.Label>Generated Password</Form.Label>
        <input className="form-control" type="text" value={generatedPassword} readOnly />
      </Form.Group>
    </div>
  );
}

export default PasswordForm;
