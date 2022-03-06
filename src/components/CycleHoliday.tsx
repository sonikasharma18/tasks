import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "NPD" | "NCCD" | "WSD" | "NFARD" | "NLD";

    const wordAlphabet: Record<Holiday, Holiday> = {
        NCCD: "NFARD",
        NFARD: "NLD",
        NLD: "NPD",
        NPD: "WSD",
        WSD: "NCCD"
    };

    const wordOrder: Record<Holiday, Holiday> = {
        NPD: "NCCD",
        NCCD: "WSD",
        WSD: "NFARD",
        NFARD: "NLD",
        NLD: "NPD"
    };
    const [word, setword] = useState<Holiday>("NPD");
    function nextWordAlphabet(): void {
        setword(wordAlphabet[word]);
    }
    function nextWordOrder(): void {
        setword(wordOrder[word]);
    }
    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={nextWordAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextWordOrder}>Advance by Year</Button>
            <div>
                {word === "NPD" ? (
                    <span> Holiday: 🍿 </span>
                ) : word === "NCCD" ? (
                    <span> Holiday: 🥕 </span>
                ) : word === "WSD" ? (
                    <span> Holiday: 🎶 </span>
                ) : word === "NFARD" ? (
                    <span> Holiday: 🌈 </span>
                ) : word === "NLD" ? (
                    <span> Holiday: 🥤 </span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
