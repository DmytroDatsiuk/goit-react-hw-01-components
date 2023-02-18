import PropTypes from 'prop-types';
import { TransactionTheadTd } from './Transaction.styled';

export const TransacionListItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <tr>
        <TransactionTheadTd>{type}</TransactionTheadTd>
        <TransactionTheadTd>{amount}</TransactionTheadTd>
        <TransactionTheadTd>{currency}</TransactionTheadTd>
      </tr>
    </>
  );
};

TransacionListItem.prototype = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
