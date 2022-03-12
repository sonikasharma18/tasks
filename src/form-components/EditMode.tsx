import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);
    const [isEditing, setisEditing] = useState<boolean>(false);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    function updateIsStudent(event: ChangeEvent) {
        setisStudent(event.target.checked);
    }

    function updateIsEditing(event: ChangeEvent) {
        setisEditing(event.target.checked);
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is_switch-on"
                        label="Editing"
                        checked={isEditing}
                        onChange={updateIsEditing}
                    />
                </div>
                <div>
                    {isEditing && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Not a student"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    )}
                </div>
                <div>
                    {isEditing && (
                        <Form.Group controlId="formPersonName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            </div>
        </div>
    );
}
