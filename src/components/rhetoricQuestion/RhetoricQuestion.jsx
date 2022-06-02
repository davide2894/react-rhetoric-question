import './RhetoricQuestion.scss';

export default function RhetoricQuestion(props) {
    
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true

    let answer  // Use ternary here
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
         
    
    return(
        <div className="rhetoricQuestion">
            <h1 className="rhetoricQuestion__question">Do I feel like going out tonight?</h1>
            <div className="rhetoricQuestion__answerContainer">
                <h1 className="rhetoricQuestion__answer">{answer}</h1>
            </div>
        </div>
    )
}