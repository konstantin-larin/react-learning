import "./InteractiveRating.css";
import {useState} from "react";
import HowDidWeDo from "./HowDidWeDo.jsx";
import Thanks from "./Thanks.jsx";

export default function InteractiveRating() {
    const [stage, setStage] = useState("HowDidWeDo");
    const [rating, setRating] = useState(undefined);
    let ActiveComponent, ActiveComponentProps;
    if(stage ==="HowDidWeDo"){
        ActiveComponent = HowDidWeDo;
        ActiveComponentProps = {
            toThanks(){setStage("Thanks")},
            rate(num){
                setRating(num);
            }
        }
    } else {
        ActiveComponent = Thanks;
        ActiveComponentProps = {
            rating
        }
    }
    return (
        <div className={"interactiveRating"}>
            <ActiveComponent {...ActiveComponentProps}/>
        </div>
    )
}


