import './RhetoricQuestion.scss';
import { useState } from 'react';

export default function RhetoricQuestion() {
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