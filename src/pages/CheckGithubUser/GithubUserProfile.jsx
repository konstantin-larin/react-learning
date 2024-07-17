import {useEffect, useState} from "react";

export default function GithubUserProfile({login = ""}) {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/" + login)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        setInfo(data);
                        setError(null);
                    });
                } else {
                    setInfo(null);
                    setError("Error " + response.status);
                }
            });

        return () => {

        }
    }, [login]);

    if (info) {
        return (
            <div className={"profile"}>
                <div className={"profile-photo"}>
                    <img src={info.avatar_url} alt=""/>
                </div>
                <h2 className={"profile-title"}>{info.name || "No name"}</h2>
                <div className={"profile-param"}>Link:&nbsp;&nbsp;<i><a href={info.url}>{info.url}</a></i>
                </div>
                <div className={"profile-param"}>Email:&nbsp;&nbsp;{info.email || "unknown"}</div>
                <div className={"profile-param"}>Twitter:&nbsp;&nbsp;{info.twitter_username || "unknown"}</div>
                <div className={"profile-param"}>Location:&nbsp;&nbsp;{info.location || "unknown"}</div>
                <div className={"profile-param"}>Company:&nbsp;&nbsp;{info.company || "none"}</div>
                <div className={"profile-param"}>Count of repositories:&nbsp;&nbsp;{info.public_repos}</div>
                <div className={"profile-param"}>Followers:&nbsp;&nbsp;{info.followers}</div>
                <div className={"profile-param"}>
                    Bio <br/>
                    <p className={"profile-param-description"}>{info.bio || "None"}</p>
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }
    return (
        <div>
            <span className="loader"></span>
        </div>
    )
}
