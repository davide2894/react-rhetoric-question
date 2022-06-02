import './RhetoricQuestion.scss';

export default function RhetoricQuestion(props) {
    
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true;

    //let answer = isGoingOut ? "Yes" : "No";
    
    return(
        <div className="rhetoricQuestion">
            <h1 className="rhetoricQuestion__question">Do I feel like going out tonight?</h1>
            <div className="rhetoricQuestion__answerContainer">
                <h1 className="rhetoricQuestion__answer">{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}