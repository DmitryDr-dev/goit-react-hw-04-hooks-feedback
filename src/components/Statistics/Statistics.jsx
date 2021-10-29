import PropTypes from 'prop-types';
import './Statistics.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics">
      <li className="statistics__item">Good: {good} </li>
      <li className="statistics__item">Neutral: {neutral}</li>
      <li className="statistics__item">Bad: {bad}</li>
      <li className="statistics__item">Total: {total}</li>
      <li className="statistics__item">
        Positive Feedback: {positivePercentage || 0}%
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
