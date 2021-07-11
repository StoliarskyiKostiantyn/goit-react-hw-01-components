import s from './TransactionHistoryRow.module.css';
fuction TransactionHistoryRow({type,amount,currency}){
    return (
   <>
  <td>{type}</td>
  <td>{amount}</td>
  <td>{currency}</td>
</> 
)
}

