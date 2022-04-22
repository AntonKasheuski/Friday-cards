import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./header/Header";
import {Routers} from "./routes/Routers";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routers/>
            </HashRouter>
        </div>
    );
}

export default App;
