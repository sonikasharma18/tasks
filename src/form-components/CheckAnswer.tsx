import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    //function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
    //    setAnswer(event.target.value);
    //}

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="string"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>The user is {answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
