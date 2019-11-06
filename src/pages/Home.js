import React from "react";
import Container from "../components/Container"


function Home() {
    return (
        <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Container />
        </div>
    )
}



export default Home;