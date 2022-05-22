import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionEditExpense, actionEditing } from '../actions';
import Input from './Input';
import Select from './Select';
import CheckIcon from '../images/checked-icon.svg';
import formatter from '../helper/currencyFormatter';

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
      <tr className="odd:bg-gray-600 even:bg-gray-500">
        <td>
          <Input
            label=""
            type="text"
            id="description"
            testeid="description"
            onchange={ this.changeState }
            value={ description }
            inputClass="bg-inherit border-b-2 border-gray-700
            text-center w-full outline-none my-2
            hover:border-gray-800 focus:border-gray-800 transition-all
            ease-in duration-300"
            maxLength="12"
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
            inputClass="bg-inherit border-b-2 border-gray-700
            text-center w-full outline-none my-2
            hover:border-gray-800 focus:border-gray-800 transition-all
            ease-in duration-300"
            optionClass="bg-gray-700"
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
            inputClass="bg-inherit border-b-2 border-gray-700
            text-center w-full outline-none my-2
            hover:border-gray-800 focus:border-gray-800 transition-all
            ease-in duration-300"
            optionClass="bg-gray-700"
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
            inputClass="bg-inherit border-b-2 border-gray-700
            text-center w-full outline-none my-2
            hover:border-gray-800 focus:border-gray-800 transition-all
            ease-in duration-300"
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
            inputClass="bg-inherit border-b-2 border-gray-700
            text-center w-full outline-none my-2
            hover:border-gray-800 focus:border-gray-800 transition-all
            ease-in duration-300"
            optionClass="bg-gray-700"
          />
        </td>
        <td>
          {formatter.format(Number(currency && exchangeRates[currency].ask))}
        </td>
        <td>
          {formatter.format(Number(currency && exchangeRates[currency].ask * value))}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ () => this.editExpense(false, id) }
          >
            <img src={ CheckIcon } className="w-6" alt="check icon" />
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
