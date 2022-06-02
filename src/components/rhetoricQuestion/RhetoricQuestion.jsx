import './RhetoricQuestion.scss';
import { useState } from 'react';

export default function RhetoricQuestion() {
    
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = useState(false);

    function handleClick(){
        setIsGoingOut(prevState => !prevState);
    }
    
    return(
        <div className="rhetoricQuestion">
            <h1 className="rhetoricQuestion__question">Do I feel like going out tonight?</h1>
            <div className="rhetoricQuestion__answerContainer" onClick={handleClick}>
                <h1 className="rhetoricQuestion__answer">{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}