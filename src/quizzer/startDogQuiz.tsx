import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { Button, Form } from "react-bootstrap";

export function App(): JSX.Element {
    const [dogQuiz, setdogQuiz] = useState<string>("");

    function dogQuestion(): void {
        console.log("Find out what kind of dog breed you are");
        console.log("Question1:Do you like the outdoors? Points: 3");
        console.log("Question2: Do you like sweet or salty foods? Points: 3");
        console.log(
            "Question3: Pick between the two colors: Red or Blue? Points: 3"
        );
    }

    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={dogQuiz}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setdogQuiz(event.target.value)
                    }
                />
            </Form.Group>
            <div>{dogQuestion}.</div>
        </div>
    );
}
