import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import ResultContainer from "./components/ResultContainer"


function App() {
    return (
        <div>
            <Wrapper>
                <Header />
                <ResultContainer />
            </Wrapper>
        </div>
    )
}

export default App;