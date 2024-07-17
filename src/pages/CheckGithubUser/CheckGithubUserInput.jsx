export default function CheckGithubUserInput({login, setLogin}) {
    function onKeyDown(e){
        if(e.code === 'Enter'){
            setLogin(e.target.value);
        }
    }
    function onClick(){
        setLogin(document.getElementById("user-name").value);
    }
    return (
        <div className={"user-name-field"}>
            <label htmlFor="user-name">Enter user's login:</label>
            <input type="text" id="user-name" defaultValue={login} onKeyDown={onKeyDown} />

            <button onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="white">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
            </button>
        </div>
    )
}
