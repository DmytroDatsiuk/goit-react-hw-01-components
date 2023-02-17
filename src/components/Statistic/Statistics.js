import PropTypes from 'prop-types';
import { StatisticsItem } from './StaticsticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => {
          return (
            <li key={item.id}>
              <StatisticsItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
