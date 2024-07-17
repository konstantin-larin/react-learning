import illustrationThanks from "./assets/illustration-thank-you.svg";

export default function Thanks({rating}){
    return (
    <div className={"interactive-form"}>
        <div className={"thanks-img"}><img src={illustrationThanks}/></div>
        <div className={"thanks-rate-tablet"}>You selected {rating} out of 5</div>
        <h3 className={"interactive-form-title"}>Thank you!</h3>
        <p className={"interactive-form-text"}>Thank you so much for taking the time to provide your feedback! It’s incredibly valuable and helps me improve</p>
    </div>
    )
}
