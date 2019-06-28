import React from "react";
import { Layout } from "element-react";
import styles from "./main-layout.css";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <Layout.Row>
            <Layout.Col span="12" offset="6">
              <h1>Password Generator (HMAC)</h1>
            </Layout.Col>
          </Layout.Row>
        </header>
        <div className={styles.container}>
          <Layout.Row>
            <Layout.Col span="12" offset="6">
              {this.props.children}
            </Layout.Col>
          </Layout.Row>
        </div>
      </div>
    );
  }
}

export default MainLayout;
