import PropTypes from 'prop-types';

import { TransacionListItem } from './TransactionListItem';

export const TransactionList = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id}>
            <TransacionListItem item={item} />
          </tbody>
        );
      })}
    </table>
  );
};

TransacionListItem.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
