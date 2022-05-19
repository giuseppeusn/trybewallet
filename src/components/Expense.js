import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDeleteExpense } from '../actions';

class Expense extends Component {
  deleteExpense = ({ target }) => {
    const { expensesGlobal, deleteGlobalExpense } = this.props;

    const newExpenses = expensesGlobal.length > 1
      ? expensesGlobal.filter((e) => e.id !== Number(target.id))
      : [];

    deleteGlobalExpense(newExpenses);
  }

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
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            id={ expenses.id }
            onClick={ this.deleteExpense }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesGlobal: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGlobalExpense: (value) => dispatch(actionDeleteExpense(value)),
});

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesGlobal: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteGlobalExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
