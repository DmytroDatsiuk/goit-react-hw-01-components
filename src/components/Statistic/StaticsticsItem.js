import PropTypes from 'prop-types';
import { StatisticPercentage, StatisticLabel } from './Statistic.styled';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage}%</StatisticPercentage>
    </>
  );
};

StatisticsItem.prototype = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
