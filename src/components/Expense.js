import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expense extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tr>
        <td>{expenses.description}</td>
        <td>{expenses.tag}</td>
        <td>{expenses.method}</td>
        <td>{Number(expenses.value).toFixed(2)}</td>
        <td>{expenses.exchangeRates[expenses.currency].name}</td>
        <td>
          {Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}
        </td>
        <td>
          {Number(
            expenses.exchangeRates[expenses.currency].ask * expenses.value,
          ).toFixed(2)}
        </td>
        <td>Real</td>
      </tr>
    );
  }
}

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Expense;
