import PropTypes from 'prop-types';
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
TransactionHistoryRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TransactionHistoryRow;
