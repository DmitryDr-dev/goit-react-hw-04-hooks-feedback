import { useState } from 'react';

// import components
import { FeedbackOptions } from './components';
import { Section } from './components';
import { Notification } from './components';
import { Statistics } from './components';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // function to handle clicks
  const onClickHandler = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        return;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        return;
      case 'bad':
        setBad(bad => bad + 1);
        return;
      default:
        return;
    }
  };

  // function to count total feedbacks
  const countTotalFeedback = () => good + neutral + bad;

  // function to count average positive feedback percentage
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.floor((good * 100) / total);
  };

  // !imp Can we get all states as iterable array?
  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          onClick={onClickHandler}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section>
        {countTotalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
