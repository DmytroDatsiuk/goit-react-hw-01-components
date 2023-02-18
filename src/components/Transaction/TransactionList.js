import PropTypes from 'prop-types';

import { TransacionListItem } from './TransactionListItem';
import { Transaction, TransactionThead, TransactionTbody, TransactionTheadTh } from './Transaction.styled';

export const TransactionList = ({ items }) => {
  return (
    <Transaction>
      <TransactionThead>
        <tr>
          <TransactionTheadTh>Type</TransactionTheadTh>
          <TransactionTheadTh>Amount</TransactionTheadTh>
          <TransactionTheadTh>Currency</TransactionTheadTh>
        </tr>
      </TransactionThead>
      {items.map(item => {
        return (
          <TransactionTbody key={item.id}>
            <TransacionListItem item={item} />
          </TransactionTbody>
        );
      })}
    </Transaction>
  );
};

TransacionListItem.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
