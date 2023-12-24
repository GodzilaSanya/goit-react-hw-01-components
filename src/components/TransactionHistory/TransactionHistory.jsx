import css from './transactionHistory.module.css';

const white = '#ffffff';
const grey = '#ecf1f3';
let currentColor = grey;

const TransactionHistory = ({ items }) => {
  const tableRows = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} style={{ backgroundColor: colorizeTable() }}>
        <td className={css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.transaction_history}>
      <thead className={css.table_head}>
        <tr className={css.table_head_item}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.table_body}>{tableRows}</tbody>
    </table>
  );
};

function colorizeTable() {
  if (currentColor === grey) {
    return (currentColor = white);
  } else {
    return (currentColor = grey);
  }
}

export default TransactionHistory;
