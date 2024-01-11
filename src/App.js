import styled from "styled-components";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { navigationList } from "./UIData";

function App({ element }) {
  return (
    <Container fluid>
      <AppStyle>
        <Row className="vh-100">
          <Col lg={2} className="side-bar border">
            {navigationList.map(({ text, icon }, i, arr) => (
              <div className="nav-item">
                <span className="me-2">{icon}</span> {text}
              </div>
            ))}
          </Col>
          <Col className="main-container border">{element}</Col>
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
    color: white;
    padding: 10px;
    background-color: #054b6e;
    margin-top: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
