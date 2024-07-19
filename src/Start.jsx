import styles from "./Start.module.css";
import {Link} from "react-router-dom";

export default function Start() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Choose Page:</h1>
            <ul className={styles.list}>
                <Link to={"/pages/InteractiveRating"}>
                    <li>Interactive Rating</li>
                </Link>
                <Link to={"/pages/CheckGithubUser"}>
                    <li>Check Github User</li>
                </Link>
            </ul>
        </div>
    )
}
