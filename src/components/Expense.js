import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDeleteExpense, actionEditing } from '../actions';
import Edit from './Edit';

class Expense extends Component {
  deleteExpense = ({ target }) => {
    const { expensesGlobal, deleteGlobalExpense } = this.props;

    const newExpenses = expensesGlobal.length > 1
      ? expensesGlobal.filter((e) => e.id !== Number(target.id))
      : [];

    deleteGlobalExpense(newExpenses);
  }

  render() {
    const { expenses, edit, id, editing } = this.props;
    return edit && id === expenses.id ? (
      <Edit id={ id } />
    ) : (
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
            data-testid="edit-btn"
            onClick={ () => editing(true, expenses.id) }
          >
            Editar
          </button>
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
  edit: state.wallet.edit,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGlobalExpense: (value) => dispatch(actionDeleteExpense(value)),
  editing: (edit, id) => dispatch(actionEditing(edit, id)),
});

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesGlobal: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteGlobalExpense: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
