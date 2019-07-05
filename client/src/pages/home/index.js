import React from "react";
import { Layout, Form, Input, Button } from "element-react";
import update from "immutability-helper";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        masterPassword: "",
        secondPassword: "",
        length: "12",
        generatedPassword: ""
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const reqBody = update(this.state.form, { $unset: ["generatedPassword"] });
    axios
      .post("/api/generatePassword", reqBody, {
        headers: {
          "content-type": "application/json"
        }
      })
      .then(resp => {
        this.setState({ form: resp.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleChange(key, value) {
    const newForm = update(this.state.form, { [key]: { $set: value } });
    this.setState({ form: newForm });
  }

  render() {
    return (
      <div>
        <Layout.Row>
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
                Generate
              </Button>
              <Button>Clear</Button>
            </Form.Item>
            <Form.Item label="Generated Password">
              <Input value={this.state.form.generatedPassword} readOnly />
            </Form.Item>
          </Form>
        </Layout.Row>
      </div>
    );
  }
}

export default Home;
