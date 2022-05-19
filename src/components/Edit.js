import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionEditExpense, actionEditing } from '../actions';
import Input from './Input';
import Select from './Select';

class Edit extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount = () => {
    const { expenses, id } = this.props;
    const expense = expenses.find((e) => e.id === id);
    this.setState({ ...expense });
  }

  changeState = ({ target }) => {
    this.setState({ [target.id]: target.value });
  }

  editExpense = () => {
    const { editing, expenses, id, editGlobalExpense } = this.props;
    const editExpense = expenses.filter((e) => e.id !== id);
    const newExpenses = [...editExpense, this.state];

    editGlobalExpense(newExpenses.sort((a, b) => a.id - b.id));
    editing();
  }

  render() {
    const { id, currencies } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <tr>
        <td>
          <Input
            label=""
            type="text"
            id="description"
            testeid="description"
            onchange={ this.changeState }
            value={ description }
          />
        </td>
        <td>
          <Select
            values={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            id="tag"
            label=""
            testeid="tag"
            onchange={ this.changeState }
            value={ tag }
          />
        </td>
        <td>
          <Select
            values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            id="method"
            label=""
            testeid="method"
            onchange={ this.changeState }
            value={ method }
          />
        </td>
        <td>
          <Input
            label=""
            type="number"
            id="value"
            testeid="value"
            onchange={ this.changeState }
            value={ value }
          />
        </td>
        <td>
          <Select
            values={ currencies }
            id="currency"
            label=""
            testeid="currency"
            onchange={ this.changeState }
            value={ currency }
          />
        </td>
        <td>
          {Number(currency && exchangeRates[currency].ask).toFixed(2)}
        </td>
        <td>
          {Number(currency && exchangeRates[currency].ask * value).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ () => this.editExpense(false, id) }
          >
            Editar despesa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editing: (edit, id) => dispatch(actionEditing(edit, id)),
  editGlobalExpense: (value) => dispatch(actionEditExpense(value)),
});

Edit.propTypes = {
  editing: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  editGlobalExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
