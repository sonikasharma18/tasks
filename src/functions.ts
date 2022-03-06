/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 * <div>
            <div>Start Attempt</div>
            {<div> {numberAttempts}</div>}
            <Button
                diabled={InProgress || numberAttempts === 0}
                onClick={StartQuiz}
            >
                Start Quiz
            </Button>
            <Button diabled={InProgress} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button disabled={InProgress} onClick={addAttempt}>
                Mulligan
            </Button>
        </div>
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature = (temperature - 32) * (5 / 9));
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 * export function twodiceFunction(): JSX.Element {
    const [onedice, setonedice] = useState<number>(1);
    const [twodice, settwodice] = useState<number>(6);
    function Winner(): void {
        if (onedice !== 1 && twodice !== 1 && onedice === twodice) {
            setonedice(onedice);
            settwodice(twodice);
            console.log("Winner");
        }
    }
    function Loser(): void {
        if (onedice === 1 && twodice === 1 && onedice === twodice) {
            setonedice(onedice);
            settwodice(twodice);
            console.log("Loser");
        }
    }
    function Neither(): void {
        if (onedice !== 1 && twodice !== 1 && onedice !== twodice) {
            console.log("Don't win or lose");
        }
    }
    return (
        <div>
            <div>Two Dice</div>
            <Button onClick={d6}>Roll Left</Button>
            {Winner || Loser || Neither}
            <Button onClick={d6}>Roll Right</Button>
            {Winner || Loser || Neither}
            <span> data-testid = left dice </span>
            <span> data-testid= right dice </span>
        </div>
    );
}

 */
export function add3(first: number, second: number, third: number): number {
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    if (first > 0) {
        total = first;
    } else {
        total = 0;
    }
    if (second > 0) {
        total1 = second;
    } else {
        total1 = 0;
    }
    if (third > 0) {
        total2 = third;
    } else {
        total2 = 0;
    }
    return total + total1 + total2;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 * const fullWord: Record<Hoilday, string> = {
    NPD: "National Popcorn Day",
    NCCD: "National Carrot Cake Day",
    WSD: "World Sleep Day",
    NFARD: "National Fina A Rainbow Day",
    NLD: "National Lemonade Day"
};
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}
/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 * export function StartAttemp(): JSX.Element {
    const [startNum, endNum] = useState<number>(1);
    const [startQuiz, endQuiz] = useState<boolean>(false);

    return (
        <div>
            <div>Start Attempt</div>
            <Button onClick={QuizInProgress}>Start Quiz</Button>
            {startQuiz = true && startNum - 1}
            <Button onClick={QuizNotInProgress}>Stop Quiz</Button>
            {endQuiz = true}
            <Button onClick={Attempts}>Mulligan</Button>
            {startNum + 1}
        </div>  
    );
}
 *  function QuizInProgress(): void {
        if(startQuiz === true){
            <button disabled={Start Quiz} >
            <button disabled={Mulligan} />
        }
    }
 * function QuizNotInProgress(): void {
        if(startNum === 0){
            <button disabled={Start Quiz} />
        }
    }
    function Attempts(): void {
        if(startQuiz === false){
            <button disabled={Stop Quiz} />
        }
    
    }
 */
export function isQuestion(message: string): boolean {
    return message.endsWith("?") ? true : false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 * <div>
                if (oneDice !== 1 && twoDice !== 1 && oneDice === twoDice)
                {console.log("Winner")}; else if (oneDice === 1 && twoDice === 1
                && oneDice === twoDice)
                {console.log("Loser")}; else {console.log("Neither")};
            </div>
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toUpperCase() === "YES" || word.toLowerCase() === "yes") {
        return true;
    } else if (word.toUpperCase() === "NO" || word.toLowerCase() === "no") {
        return false;
    } else {
        return null;
    }
}
