import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "element-react";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Layout.Row>
            <Layout.Col xs="2" sm="4" md="6" lg="6" xl="6">
              &nbsp;
            </Layout.Col>
            <Layout.Col xs="20" sm="16" md="12" lg="12" xl="12">
              <h1>Password Generator (HMAC)</h1>
            </Layout.Col>
            <Layout.Col xs="2" sm="4" md="6" lg="6" xl="6">
              &nbsp;
            </Layout.Col>
          </Layout.Row>
        </header>
        <main className="App-main">
          <Layout.Row>
            <Layout.Col xs="2" sm="4" md="6" lg="6" xl="6">
              &nbsp;
            </Layout.Col>
            <Layout.Col xs="20" sm="16" md="12" lg="12" xl="12">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact component={NotFound} />
                </Switch>
              </BrowserRouter>
            </Layout.Col>
            <Layout.Col xs="2" sm="4" md="6" lg="6" xl="6">
              &nbsp;
            </Layout.Col>
          </Layout.Row>
        </main>
      </div>
    );
  }
}

export default App;
