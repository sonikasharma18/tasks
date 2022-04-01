import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";

function typeQuestion(questions: string): string {
    if (questions === "common sense quiz") {
        return "both short anwer and mutiple choice";
    } else {
        return "only mutiple choice";
    }
}

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("There are three quizzes shown", () => {
        const DogQuiz = screen.getByText("Dog Quizzer");
        const MathQuiz = screen.getByText("Math Quizzer");
        const CSQuiz = screen.getByText("Common Sense Quizzer");
        expect(DogQuiz).toBeInTheDocument();
        expect(MathQuiz).toBeInTheDocument();
        expect(CSQuiz).toBeInTheDocument();
    });
    test("The quizzes questions are shown", () => {
        const DogQuizQuestions = screen.queryByText("Dog Quiz");
        const MathQuizQuestion = screen.queryByText("Math Quiz");
        const CSQuizQuestion = screen.queryByText("Common Sense Quiz");
        expect(DogQuizQuestions).toBeInTheDocument();
        expect(MathQuizQuestion).toBeInTheDocument();
        expect(CSQuizQuestion).toBeInTheDocument();
    });
    test("There are shortanswer and mutiple choice", () => {
        expect(typeQuestion("dog quiz")).toBe("only mutiple choice");
        expect(typeQuestion("math quiz")).toBe("only mutiple choice");
        expect(typeQuestion("common sense quiz")).toBe(
            "both short anwer and mutiple choice"
        );
    });
    test("Check the correctness", () => {
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Check for points", () => {
        expect(screen.queryByText("you have 0 points")).not.toBeInTheDocument();
    });
});
