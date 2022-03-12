import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setcurrentChoice] = useState<string>(options[0]);
    // This is the Control
    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Choices">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={currentChoice} onChange={updateFavorite}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>You have {currentChoice} selected</div>
            <div>
                The user is {currentChoice === expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}
