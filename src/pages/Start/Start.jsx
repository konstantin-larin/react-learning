import styles from "./Start.module.css";
export default function Start({setPage}) {
    function onClick(e){
        const page = e.target.dataset.page;
        if(page) setPage(page);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Choose Page:</h1>
            <ul onClick={onClick} className={styles.list}>
                <li data-page="InteractiveRating">Interactive Rating</li>
                <li data-page="CheckGithubUser">Check Github User</li>
            </ul>
        </div>
    )
}
