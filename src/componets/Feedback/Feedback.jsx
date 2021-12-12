import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'
import Section from './Section'
import Notification from './Notification'

class Feedback extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onClickFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.trunc((this.state.good / total) * 100);
    return total ? percentage : 0;
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions 
        options={this.state}
        onClick={this.onClickFeedback}
        />
        <h1>Statistics</h1>
        {!total ? 
        <Notification message="There is no feedback"></Notification> :
        <Statistics
           good={good} 
           neutral={neutral} 
           bad={bad} 
           total={total} 
           positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
        </Section>
      </div>
    );
  }
}

export default Feedback;