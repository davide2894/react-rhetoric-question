import './RhetoricQuestion.scss';

export default function RhetoricQuestion() {
    
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    return(
        <div className="rhetoricQuestion">
            <h1 className="rhetoricQuestion__question">Do I feel like going out tonight?</h1>
            <div className="rhetoricQuestion__answerContainer">
                <h1 className="rhetoricQuestion__answer">{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}