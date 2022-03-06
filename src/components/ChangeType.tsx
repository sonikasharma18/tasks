import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //ChangeType
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipVisibility1(): void {
        if (question === "multiple_choice_question") {
            setQuestion("short_answer_question");
        } else {
            setQuestion("multiple_choice_question");
        }
    }
    return (
        <div>
            <div>Change Type</div>
            <Button onClick={flipVisibility1}>Change Type</Button>
            {question === "short_answer_question" ? (
                <div> Short Answer </div>
            ) : (
                <div> Multiple Choice </div>
            )}
        </div>
    );
}
