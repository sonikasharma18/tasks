import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numLeft, setNumLeft] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<number>(0);

    function numleftUsed() {
        const newnumLeft = numLeft - 1;
        setNumLeft(newnumLeft);
    }
    function addnumRequest() {
        let numberLeft = 0;
        const copynumRequest = numRequest;
        if (isNaN(copynumRequest)) {
            numberLeft = numLeft;
        } else {
            numberLeft = numLeft + numRequest;
        }
        setNumLeft(numberLeft);
    }
    function updateifNum(currentNum: string) {
        if (!isNaN(parseInt(currentNum))) {
            setNumRequest(parseInt(currentNum));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>You have this many attempts: {numLeft}</div>
            <Form.Group controlId="formNumber">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateifNum(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={addnumRequest}>gain</Button>
                <Button onClick={numleftUsed} disabled={numLeft === 0}>
                    use
                </Button>
            </div>
        </div>
    );
}
