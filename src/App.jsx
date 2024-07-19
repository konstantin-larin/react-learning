import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from "./Start.jsx";
import InteractiveRating from "./pages/InteractiveRating/InteractiveRating.jsx";
import CheckGithubUser from "./pages/CheckGithubUser/CheckGithubUser.jsx";

export default function App(){
    return (
        <BrowserRouter basename={"/react-learning"}>
            <Routes>
                <Route element={<Start />} path={"/"}></Route>
                <Route element={<InteractiveRating />} path={"/pages/InteractiveRating/"}></Route>
                <Route element={<CheckGithubUser />} path={"/pages/CheckGithubUser/"}></Route>
            </Routes>
        </BrowserRouter>
    )
}
