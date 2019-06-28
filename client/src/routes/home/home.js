import React from "react";
import { Layout, Form, Input, Button } from "element-react";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <div>
        <Layout.Row>
          <Form>
            <Form.Item label="Master Password">
              <Input type="password" />
            </Form.Item>
            <Form.Item label="Domain Name">
              <Input />
            </Form.Item>
            <Form.Item label="Length">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Generate</Button>
              <Button>Clear</Button>
            </Form.Item>
          </Form>
        </Layout.Row>
        <Layout.Row>
          <Form>
            <Form.Item label="Generated Password">
              <Input />
            </Form.Item>
          </Form>
        </Layout.Row>
      </div>
    );
  }
}

export default Home;
