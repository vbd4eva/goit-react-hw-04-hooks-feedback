import { useState} from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const Feedback = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    // state helpful logic
    const feedbackRange = {
        "good": setGood,
        "neutral": setNeutral,
        "bad": setBad
    };
    const options = Object.keys(feedbackRange);


    // calculating data logic
    const countTotalFeedback = good + neutral + bad;
    // const tolalFeedbacks = countTotalFeedback();
    const countPositiveFeedbackPercentage =  Math.round((good * 100) / countTotalFeedback);
    // const positiveFeedbackPercentage = countPositiveFeedbackPercentage();


    // UX logic
    const voteFeedback = (e) => {

        const actionedBtnName = e.target.name;
        const setState = feedbackRange[actionedBtnName];

        setState(prevState => prevState + 1);
    };


    return (
        <>
                <Section title="Please leave feedback" headerRank="1">
                    <FeedbackOptions options={options} onLeaveFeedback={voteFeedback}></FeedbackOptions>
                </Section>

                <Section title="Statistic" headerRank="2">
                    {
                    (countTotalFeedback > 0)
                        ?
                         <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}></Statistics>
                        :
                        <Notification message="No feedback given" />
                    }
                </Section>
        </>
    );
}

export default Feedback;