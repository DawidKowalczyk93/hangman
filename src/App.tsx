import {useEffect, useState} from "react";
import words from "./wordList.json";
import {HangManDrawing} from "./HangManDrawing.tsx";
import {HangManWord} from "./HangManWord.tsx";
import {Keyboard} from "./Keyboard.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const inCorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isWinner = wordToGuess.split('').every( letter => guessedLetters.includes(letter))
    const isLost = inCorrectLetters.length >= 6

    function addGuessedLetters(letter: string) {
        if( guessedLetters.includes(letter)) return

        setGuessedLetters( currentLetters => [...currentLetters, letter])

    }

    useEffect( () => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if(!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetters(key)
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters] )

    console.log(wordToGuess);
    console.log("Tabliba zlych liter: ",inCorrectLetters)
    console.log("Litera ktora zgadujesz: ",guessedLetters)
    return <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",

    }}>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
            {isWinner && "Winner! - Refresh to try again"}
            {isLost && "Nicer Try! - Refresh to try again"}
        </div>
        <HangManDrawing numberOfGuesses={inCorrectLetters.length} />
        <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div style={{ alignSelf: "stretch"}}>
            <Keyboard />
        </div>


    </div>
}


export default App
