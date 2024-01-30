import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PasswordForm from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-primary text-white">
        <Container>
          <Row>
            <Col xs={2} sm={4} md={6} lg={6} xl={6}>
              &nbsp;
            </Col>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
              <h1>Password Generator (HMAC)</h1>
            </Col>
            <Col xs={2} sm={4} md={6} lg={6} xl={6}>
              &nbsp;
            </Col>
          </Row>
        </Container>
      </header>
      <main className="App-main">
        <Container>
          <Row>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<PasswordForm />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
