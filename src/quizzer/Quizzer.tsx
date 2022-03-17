import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Webpage from "../assets/webpage.png";
export function Quizzer(): JSX.Element {
    // This is the State (Model)
    const [Quiz, setQuiz] = useState<string>(
        "Find out what kind of dog breed you are-3questions"
    );

    // This is the Control
    function updateQuiz(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuiz(event.target.value);
    }
    function dogQuestion(): void {
        console.log("Find out what kind of dog breed you are");
        console.log("Question1:Do you like the outdoors? Points: 3");
        console.log("Question2: Do you like sweet or salty foods? Points: 3");
        console.log(
            "Question3: Pick between the two colors: Red or Blue? Points: 3"
        );
    }
    function mathQuestion(): void {
        console.log("Find out if your a math wizard");
        console.log("Question1: What is 10 + 13? Points: 3");
        console.log("Question2: What is 4*12? Points: 3");
        console.log(
            "Question3: Pick between the two numbers: 2 or 7? Points: 3"
        );
    }
    function csQuestion(): void {
        console.log("Find out if you have common sense or not");
        console.log(
            "Question1: Would you cross the road if a car is coming - Yes or No? Points: 3"
        );
        console.log(
            "Question2: If you see glass on the floor would you step over it or step on it? Points: 3"
        );
        console.log(
            "Question3: If the light is red do you stop or go? Points: 3"
        );
    }

    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <span>Quiz Option</span>
                <Form.Group controlId="userQuiz">
                    <Form.Select value={Quiz} onChange={updateQuiz}>
                        <option
                            value="Question1:Do you like the outdoors? Points: 3
                            Question2: Do you like sweet or salty foods? Points: 3
                            Question3: Pick between the two colors: Red or Blue? Points: 3"
                        >
                            Dog Quiz - Find out what kind of dog breed you are -
                            3 questions
                            {dogQuestion}
                        </option>
                        <option
                            value="Question1: What is 10 + 13? Points: 3
                        Question2: What is 4*12? Points: 3
                        Question3: Pick between the two numbers: 2 or 7? Points: 3"
                        >
                            Math Quiz - Find out if your a math wizard - 3
                            questions
                            {mathQuestion}
                        </option>
                        <option value="Question1: Would you cross the road if a car is coming - Yes or No? Points: 3 Question2: If you see glass on the floor would you step over it or step on it? Points: 3 Question3: If the light is red do you stop or go? Points: 3">
                            Common Sense Quiz - Find out if you have common
                            sense - 3 questions{csQuestion}
                        </option>
                    </Form.Select>
                </Form.Group>
                {Quiz}
                <div>
                    <Button onClick={dogQuestion}>Start Dog Quiz</Button>
                    <Button onClick={mathQuestion}>Start Math Quiz</Button>
                    <Button onClick={csQuestion}>
                        Start Common Sense Quiz
                    </Button>
                </div>
            </div>
            <img
                style={{ height: "700px", padding: "30px" }}
                src={Webpage}
                alt="A picture of my website idea"
            />
        </div>
    );
}
