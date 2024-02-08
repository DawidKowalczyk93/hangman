type HangManWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

export function HangManWord( {guessedLetters, wordToGuess}: HangManWordProps ) {



    return <div style={{
        display: "flex",
        gap: "1rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"

    }}>
        {wordToGuess.split("").map( (letter, index) => (
                <span style={{
                    borderBottom: ".8rem solid black"
                }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter)
                        ? "visible"
                        : "hidden",
                }}>{letter}</span>
                </span>

        ))}

    </div>

}