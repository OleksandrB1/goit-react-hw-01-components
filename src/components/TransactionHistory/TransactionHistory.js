import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory ({items}) {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th class={s.th}>Type</th>
      <th class={s.th}>Amount</th>
      <th class={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map ((data) => (
    <tr key={data.id}>
      <td class={s.td}>{data.type}</td>
      <td class={s.td}>{data.amount}</td>
      <td class={s.td}>{data.currency}</td>
    </tr>))
}
  </tbody>
</table>
    )
    
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };
export default TransactionHistory;