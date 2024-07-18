import './App.css';
import {useState} from "react";
import CheckGithubUser from "./pages/CheckGithubUser/CheckGithubUser.jsx";
import InteractiveRating from "./pages/InteractiveRating/InteractiveRating.jsx";
import Start from "./pages/Start/Start.jsx";

const Pages = {
    Start,
    CheckGithubUser,
    InteractiveRating
}

export default function App() {
    const [page, setPage] = useState("Start");
    if (page === "Start") {
        return <>Привет</>
    }
    const Page = Pages[page];
    return <Page></Page>
}

