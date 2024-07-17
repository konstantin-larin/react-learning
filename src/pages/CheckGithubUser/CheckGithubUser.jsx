import "./CheckGithubUser.css";
import CheckGithubUserInput from "./CheckGithubUserInput.jsx";
import GithubUserProfile from "./GithubUserProfile.jsx";
import {useState} from "react";
export default function CheckGithubUser() {
    const [login, setLogin] = useState("konstantin-larin");
    return (
        <div className="container">
            <h1 className={"title"}>Github User Info</h1>
            <CheckGithubUserInput login={login} setLogin={setLogin}/>
            <GithubUserProfile login={login} />
        </div>
    )
}
