import PropTypes from 'prop-types';
import { StatisticsItem } from './StaticsticsItem';
import { StatisticSection, StatisticTitle, StatisticList, StatisticListItem } from './Statistic.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection >
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(item => {
          return (
            <StatisticListItem isColor={item.label} key={item.id}>
              <StatisticsItem item={item} />
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
    })
  ),
};
