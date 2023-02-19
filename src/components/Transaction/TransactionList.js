import PropTypes from 'prop-types';

import {
  Transaction,
  TransactionThead,
  TransactionTbody,
  TransactionTheadTh,
  TransactionTheadTd,
} from './Transaction.styled';

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
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TransactionTbody key={id}>
            <tr>
              <TransactionTheadTd>{type}</TransactionTheadTd>
              <TransactionTheadTd>{amount}</TransactionTheadTd>
              <TransactionTheadTd>{currency}</TransactionTheadTd>
            </tr>
          </TransactionTbody>
        );
      })}
    </Transaction>
  );
};

TransactionList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
