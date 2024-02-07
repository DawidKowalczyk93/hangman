import {useState} from "react";
import words from "./wordList.json";
import {HangManDrawing} from "./HangManDrawing.tsx";
import {HangManWord} from "./HangManWord.tsx";
import {Keyboard} from "./Keyboard.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });

    console.log(wordToGuess);
    return <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",

    }}>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
        <HangManDrawing />
        <HangManWord />
        <div style={{ alignSelf: "stretch"}}>
            <Keyboard />
        </div>


    </div>
}


export default App
