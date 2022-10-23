import PropTypes from 'prop-types';
import {
  TransHistory,
  TabletThead,
  TabletTitle,
  TabletBody,
  TabletRow,
  TabletType,
  TabletCallType,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransHistory className="transaction-history">
      <TabletThead>
        <tr>
          <TabletTitle>Type</TabletTitle>
          <TabletTitle>Amount</TabletTitle>
          <TabletTitle>Currency</TabletTitle>
        </tr>
      </TabletThead>

      <TabletBody>
        {items.map((transaction) => (
          <TabletRow key={transaction.id}>
            <TabletType>{transaction.type}</TabletType>
            <TabletCallType>{transaction.amount}</TabletCallType>
            <TabletCallType>{transaction.currency}</TabletCallType>
          </TabletRow>
        ))}
      </TabletBody>
    </TransHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};