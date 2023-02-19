import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticPercentage,
  StatisticLabel,
} from './Statistic.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticListItem isColor={label} key={id}>
              <StatisticLabel>{label}</StatisticLabel>
              <StatisticPercentage>{percentage}%</StatisticPercentage>
            </StatisticListItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
