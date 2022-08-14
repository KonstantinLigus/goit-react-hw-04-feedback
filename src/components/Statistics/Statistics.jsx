import { StatisticTextStyled } from './StatisticsText.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StatisticTextStyled>Good: {good}</StatisticTextStyled>
      <StatisticTextStyled>Neutral: {neutral}</StatisticTextStyled>
      <StatisticTextStyled>Bad: {bad}</StatisticTextStyled>
      <StatisticTextStyled>Total: {total}</StatisticTextStyled>
      <StatisticTextStyled>
        Positive feedback: {positivePercentage}%
      </StatisticTextStyled>
    </>
  );
}
