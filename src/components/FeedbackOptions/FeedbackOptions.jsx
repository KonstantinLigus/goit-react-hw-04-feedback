import { PropTypes } from 'prop-types';
import { ButtonStyled } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <ButtonStyled key={option} onClick={onLeaveFeedback} name={option}>
      {option}
    </ButtonStyled>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
