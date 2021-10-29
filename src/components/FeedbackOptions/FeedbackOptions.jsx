import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export function FeedbackOptions({ onClick, options }) {
  return (
    <ul className="feedbacks">
      {options.map(option => {
        return (
          <li key={option} className="feedbacks__item">
            <button
              type="button"
              className="feedbacks__button"
              onClick={() => {
                onClick(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
