import star from "./assets/icon-star.svg";
import {useState} from "react";
export default function HowDidWeDo({toThanks, rate}){
    return (
        <div className={"interactive-form"}>
            <div className={"circle"}><img src={star} alt=""/></div>
            <h3 className={"interactive-form-title"}>How did we do?</h3>
            <p className={"interactive-form-text"}>I’m asking for your feedback because it helps me understand how I can improve and deliver better results in the future.</p>
            <RatingButtons rate={rate}/>
            <button className={"submit-button"} onClick={() => {
                toThanks();
            }}>submit</button>
        </div>
    )
}

function RatingButtons({rate}){
    const [activeBtn, setActiveBtn] = useState(null);

    function onClick(e) {
        const circle = e.target.closest('.circle');
        if(!circle) return;
        rate(+circle.dataset.value);
        setActiveBtn(+circle.dataset.value);
    }

    return (
        <div className={"interactive-form-rate-btns"} onClick={onClick}>
            <button data-value={1} className={activeBtn === 1 ? "circle button button_active" : "circle button"}><p>1</p></button>
            <button data-value={2} className={activeBtn === 2 ? "circle button button_active" : "circle button"}><p>2</p></button>
            <button data-value={3} className={activeBtn === 3 ? "circle button button_active" : "circle button"}><p>3</p></button>
            <button data-value={4} className={activeBtn === 4 ? "circle button button_active" : "circle button"}><p>4</p></button>
            <button data-value={5} className={activeBtn === 5 ? "circle button button_active" : "circle button"}><p>5</p></button>
        </div>
    )
}
