export function HangManWord() {

    const word = "test";
    const guessedLetters = "";

    return <div style={{
        display: "flex",
        gap: "1rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"

    }}>
        {word.split("").map( (letter, index) => (
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