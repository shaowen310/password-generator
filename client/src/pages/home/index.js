import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import update from "immutability-helper";
import axios from "axios";


function Home() {
  const [primaryPassword, setPrimaryPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = update(this.state.form, { $unset: ["generatedPassword"] });
    axios
      .post("/api/generatePassword", reqBody, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(resp => {
        if (
          resp.data !== undefined &&
          resp.data.generatedPassword !== undefined
        ) {
          this.setState({ form: resp.data });
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
      <Form>
        <Form.Group className="mb-3" controlId="primaryPassword">
          <Form.Label>Primary password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a primary password"
            value={primaryPassword}
            onChange={(e) => setPrimaryPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* <Layout.Row>
          <Form model={this.state.form} onSubmit={this.handleSubmit.bind(this)}>
            <Form.Item label="Master Password">
              <Input
                value={this.state.form.masterPassword}
                onChange={this.handleChange.bind(this, "masterPassword")}
                type="password"
              />
            </Form.Item>
            <Form.Item label="Second Password">
              <Input
                value={this.state.form.secondPassword}
                onChange={this.handleChange.bind(this, "secondPassword")}
              />
            </Form.Item>
            <Form.Item label="Length">
              <Input
                value={this.state.form.length}
                onChange={this.handleChange.bind(this, "length")}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" nativeType="submit">
                Generate */}


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Home;
