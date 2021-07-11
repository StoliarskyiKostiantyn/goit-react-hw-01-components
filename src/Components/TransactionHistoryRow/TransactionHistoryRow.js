import s from './TransactionHistoryRow.module.css';
function TransactionHistoryRow({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
export default TransactionHistoryRow;
