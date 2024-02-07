const HEAD = (
    <div style={{
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        position: "absolute",
        border: "10px solid black",
        right: "-20px",
        top: "30px"
    }}/>
)
const BODY = (
    <div style={{
        width: "10px",
        height: "70px",
        position: "absolute",
        background: "black",
        right: "0",
        top: "80px"
    }}/>
)
const RIGHT_ARM = (
    <div style={{
        width: "70px",
        height: "10px",
        position: "absolute",
        background: "black",
        right: "-70px",
        top: "100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}/>
)
const LEFT_ARM = (
    <div style={{
        width: "70px",
        height: "10px",
        position: "absolute",
        background: "black",
        right: "-5px",
        top: "70px",
        rotate: "30deg",
        transformOrigin: "left bottom"
    }}/>
)
const LEFT_LEG = (
    <div style={{
        width: "10px",
        height: "80px",
        position: "absolute",
        background: "black",
        right: "0",
        top: "150px",
        rotate: "25deg",
        transformOrigin: "right top"
    }}/>
)
const RIGHT_LEG = (
    <div style={{
        width: "10px",
        height: "80px",
        position: "absolute",
        background: "black",
        right: "0",
        top: "145px",
        rotate: "-25deg",
        transformOrigin: "right top"
    }}/>
)

export function HangManDrawing() {
    return <div style={{position: "relative"}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {LEFT_LEG}
        {RIGHT_LEG}
        <div style={{
            height: "30px",
            width: "10px",
            background: "black",
            position: "absolute",
            right: "0"

        }}/>
        <div style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px"
        }}/>
        <div style={{
            height: "250px",
            width: "10px",
            background: "black",
            marginLeft: "120px"
        }}/>
        <div style={{
            height: "10px",
            width: "250px",
            background: "black"
        }}/>

    </div>
}