import s from './TransactionHistory.module.css';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';
function TransactionHistory({ items }) {
  return (
    <table className={s.tabletransactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryRow
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            ></TransactionHistoryRow>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
