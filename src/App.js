import styled from "styled-components";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { navigationList } from "./UIData";
import { Link } from "react-router-dom";

function App({ children }) {
  return (
    <Container fluid>
      <AppStyle>
        <Row className="vh-100">
          <Col lg={2} className="side-bar border">
            {navigationList.map(({ text, icon, path }, i, arr) => (
              <Link className="nav-item" to={path}>
                <span className="me-2">{icon}</span> {text}
              </Link>
            ))}
          </Col>
          <Col className="main-container border">{children}</Col>
        </Row>
      </AppStyle>
    </Container>
  );
}

export default App;

const AppStyle = styled.div`
  .side-bar {
    background-color: #023047;
  }

  .nav-item {
    display: block;
    color: white;
    padding: 10px;
    background-color: #054b6e;
    margin-top: 15px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;
