import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript.
            </header>
            <p>~Sonika~</p>
            <p>Hello World!</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "20px",
                                width: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <h2 style={{ padding: "5px" }}>My favorite colors</h2>
                        <ul style={{ textAlign: "left" }}>
                            <li>Pink </li>
                            <li>Blue </li>
                            <li>Purple </li>
                            <li>Yellow </li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "20px",
                                width: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            style={{ height: "150px", padding: "15px" }}
                            src="https://mail.google.com/mail/u/1?ui=2&ik=1da81e6a00&attid=0.1&permmsgid=msg-f:1724512235328372157&th=17eeb2bdbd8ffdbd&view=att&disp=safe"
                            alt="A picture of my dog"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
