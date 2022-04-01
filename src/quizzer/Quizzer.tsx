import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Webpage from "../assets/webpage.png";

export function Quizzer(): JSX.Element {
    const [currentQuiz, setCurrentQuiz] = useState<string>("Dog Quiz");

    // This is the Control
    function updateQuiz(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentQuiz(event.target.value);
    }
    const options: string[] = ["0", "23", "5", "36", "48", "2", "7"];
    const [currentChoice, setcurrentChoice] = useState<string>(options[0]);

    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice(event.target.value);
    }
    const [currentChoice1, setcurrentChoice1] = useState<string>(options[0]);

    function updateFavorite1(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice1(event.target.value);
    }
    const [currentChoice2, setcurrentChoice2] = useState<string>(options[0]);

    function updateFavorite2(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice2(event.target.value);
    }
    const types: string[] = ["maybe", "no", "yes"];
    const [currentChoice3, setcurrentChoice3] = useState<string>(types[0]);

    function updateFavorite3(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice3(event.target.value);
    }
    const types1: string[] = ["salty", "neither", "both", "sweet"];
    const [currentChoice4, setcurrentChoice4] = useState<string>(types1[0]);

    function updateFavorite4(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice4(event.target.value);
    }
    const types2: string[] = ["Red", "Blue", "Purple"];
    const [currentChoice5, setcurrentChoice5] = useState<string>(types2[0]);

    function updateFavorite5(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice5(event.target.value);
    }
    const answers: string[] = ["step on it", "neither", "step over it", "both"];
    const [currentChoice6, setcurrentChoice6] = useState<string>(answers[0]);

    function updateFavorite6(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrentChoice6(event.target.value);
    }
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function FinishedMathQuiz(): void {
        setCurrentQuiz(
            "Now that your done with the math quiz, you got 10 point! You are a math wizard!"
        );
    }
    function FinishedDogQuiz(): void {
        setCurrentQuiz(
            "Now that your done with the dog quiz, you are a golden retriever!"
        );
    }
    function FinishedCSQuiz(): void {
        setCurrentQuiz(
            "Now that your done with the common sense quiz, you got 10 point! You do have common sense!"
        );
    }

    return (
        <div>
            <h3>Quizzer</h3>

            <span>Quizzes Options</span>
            <div>
                <Form.Group controlId="quizOptions">
                    <Form.Select value={currentQuiz} onChange={updateQuiz}>
                        <option
                            value="Dog Quiz. 
                        This entails 3 questions that will determine if you are a golden retriever. You will start off with 1 point:)"
                        >
                            Dog Quiz
                        </option>
                        <option
                            value="Math Quiz. 
                        This entails 3 questions that will determine if your a math wizard. You will start off with 1 point:)"
                        >
                            Math Quiz
                        </option>
                        <option
                            value="Common Sense Quiz. 
                        This entails 3 questions that will determine if you have common sense. You will start off with 1 point:)"
                        >
                            Common Sense Quiz
                        </option>
                    </Form.Select>
                </Form.Group>
                {currentQuiz}.
            </div>
            <div>
                <h3>Math Quizzer</h3>
                <Form.Group controlId="choicesformathquiz">
                    <Form.Label>
                        Question1: What is 10 + 13? Points: 3
                    </Form.Label>
                    <Form.Select
                        value={currentChoice}
                        onChange={updateFavorite}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice} selected</div>
                <div>
                    The user is
                    {currentChoice === "23"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                </div>
                <Form.Group data-testid="choicesformathquiz2">
                    <Form.Label>Question2: What is 4*12? Points: 3</Form.Label>
                    <Form.Select
                        value={currentChoice1}
                        onChange={updateFavorite1}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice1} selected</div>
                <div>
                    The user is
                    {currentChoice1 === "48"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                    .
                </div>
                <Form.Group controlId="choicesformathquiz3">
                    <Form.Label>
                        Question3: Pick between the two numbers: 2 or 7?
                        Points:3
                    </Form.Label>
                    <Form.Select
                        value={currentChoice2}
                        onChange={updateFavorite2}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice2} selected</div>
                <div>
                    The user is
                    {currentChoice2 === "7"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                </div>
                <div>
                    <Button onClick={FinishedMathQuiz}>
                        Finished With Math Quiz (Your fortune is at the top of
                        the page)
                    </Button>
                </div>
            </div>
            <div>
                <h3>Dog Quizzer</h3>
                <Form.Group controlId="choicesfordogquiz">
                    <Form.Label>
                        Question1: Do you like the outdoors?
                    </Form.Label>
                    <Form.Select
                        value={currentChoice3}
                        onChange={updateFavorite3}
                    >
                        {types.map((type: string) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice3} selected</div>
                <div>The user is {currentChoice3 === "yes" ? "✔️" : "❌"}.</div>
                <Form.Group controlId="choicesfordogquiz2">
                    <Form.Label>
                        Question2: Do you like sweet or salty foods?
                    </Form.Label>
                    <Form.Select
                        value={currentChoice4}
                        onChange={updateFavorite4}
                    >
                        {types1.map((type: string) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice4} selected</div>
                <div>
                    The user is {currentChoice4 === "sweet" ? "✔️" : "❌"}.
                </div>
                <Form.Group controlId="choicesfordogquiz3">
                    <Form.Label>
                        Question3: Pick between the two colors: Red or Blue?
                    </Form.Label>
                    <Form.Select
                        value={currentChoice5}
                        onChange={updateFavorite5}
                    >
                        {types2.map((type: string) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice5} selected</div>
                <div>
                    The user is {currentChoice5 === "Blue" ? "✔️" : "❌"}.
                </div>
                <div>
                    <Button onClick={FinishedDogQuiz}>
                        Finished With Dog Quiz (Your fortune is at the top of
                        the page
                    </Button>
                </div>
            </div>
            <div>
                <h3>Common Sense Quizzer</h3>
                <Form.Group controlId="chiocesforcsquiz">
                    <Form.Label>
                        Question1: Would you cross the road if a car is coming -
                        Yes or No? Points: 3
                    </Form.Label>
                    <Form.Select
                        value={currentChoice3}
                        onChange={updateFavorite3}
                    >
                        {types.map((type: string) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice3} selected</div>
                <div>
                    The user is{" "}
                    {currentChoice3 === "no"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                    .
                </div>
                <Form.Group controlId="choicesforcsquiz2">
                    <Form.Label>
                        Question2: If you see glass on the floor would you step
                        over it or step on it? Points: 3
                    </Form.Label>
                    <Form.Select
                        value={currentChoice6}
                        onChange={updateFavorite6}
                    >
                        {answers.map((answer: string) => (
                            <option key={answer} value={answer}>
                                {answer}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You have {currentChoice6} selected</div>
                <div>
                    The user is
                    {currentChoice6 === "step over it"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                    .
                </div>
                <Form.Group controlId="choicesforcsquiz3">
                    <Form.Label>
                        Question3: If the light is red do you stop or go? Type
                        in your answer Points: 3
                    </Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <div>
                    The user is
                    {name === "stop"
                        ? "✔️ and you have added 3 points to your total!"
                        : "❌"}
                </div>
                <div>
                    <Button onClick={FinishedCSQuiz}>
                        Finished With Common Sense Quiz (Your fortune is at the
                        top of the page
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
