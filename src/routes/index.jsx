import { Route,Routes } from "react-router-dom";
import Home from "../pages/home";
import Game from "../pages/game";
import Score from "../pages/score";



export default function AppRouter(){
    return (
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/game"  element={<Game/>}/>
            <Route path="/score" element= {<Score/>}/>
        </Routes>
    )
}