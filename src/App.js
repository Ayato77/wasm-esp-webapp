import './App.css';
import Login from "./Login";
import Workspace from "./Workspace";
import useLocalStorage from "./hooks/UseLocalStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";

function App() {
    const [isAuthenticated, setAuthenticated] = useLocalStorage('isAuthenticated',false);

    if(!isAuthenticated){
        return (
            <BrowserRouter>
                <main className={"App"}>
                    <Routes>
                        <Route exact path="/" element={<Login setAuthenticated = {setAuthenticated}/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <main className={"App"}>
                <Routes>
                    <Route exact path="/" element={<Workspace setAuthenticated = {setAuthenticated}/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
