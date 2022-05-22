import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { actionAddExpense, fetchApi, fetchApiAll } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';
import Expense from '../components/Expense';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  isDisabled: true,
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  changeState = ({ target }) => {
    this.setState({ [target.id]: target.value },
      () => {
        const { value, description } = this.state;

        if (value && description) {
          this.setState({ isDisabled: false });
        } else {
          this.setState({ isDisabled: true });
        }
      });
  }

  cleanInput = () => {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { value, description, currency, method, tag, isDisabled } = this.state;
    const { email, currencies, expenses, fetchAll } = this.props;
    return (
      <div>
        { email ? (
          <div className="h-[92vh]">
            <Header />
            <div className="flex justify-around bg-gray-700 p-5">
              <Input
                label="Descrição"
                type="text"
                id="description"
                testeid="description"
                onchange={ this.changeState }
                value={ description }
                className="flex flex-col items-center"
                inputClass="border-2 rounded outline-none p-0.5 hover:border-sky-600
                focus:border-sky-600"
                labelClass="text-white uppercase"
                maxLength="12"
              />
              <Select
                values={ [
                  'Alimentação',
                  'Lazer',
                  'Trabalho',
                  'Transporte',
                  'Saúde',
                ] }
                id="tag"
                label="Categoria"
                testeid="tag"
                onchange={ this.changeState }
                className="flex flex-col items-center"
                inputClass="border-2 rounded outline-none p-0.5 hover:border-sky-600
                focus:border-sky-600 text-center"
                labelClass="text-white uppercase"
                value={ tag }
              />
              <Select
                values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
                id="method"
                label="Método de pagamento"
                testeid="method"
                onchange={ this.changeState }
                className="flex flex-col items-center"
                inputClass="border-2 rounded outline-none p-0.5 hover:border-sky-600
                focus:border-sky-600 text-center"
                labelClass="text-white uppercase"
                value={ method }
              />
              <Input
                label="Valor"
                type="number"
                id="value"
                testeid="value"
                onchange={ this.changeState }
                value={ value }
                className="flex flex-col items-center"
                inputClass="border-2 rounded outline-none p-0.5 hover:border-sky-600
                focus:border-sky-600"
                labelClass="text-white uppercase"
              />
              <Select
                values={ currencies }
                id="currency"
                label="Moeda"
                onchange={ this.changeState }
                className="flex flex-col items-center"
                inputClass="border-2 rounded outline-none p-0.5 hover:border-sky-600
                focus:border-sky-600 text-center"
                labelClass="text-white uppercase"
                value={ currency }
              />
              <button
                type="button"
                onClick={ () => {
                  fetchAll(this.state,
                    expenses.length ? expenses[expenses.length - 1].id + 1 : 0);
                  this.cleanInput();
                } }
                disabled={ isDisabled }
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2
                px-4 rounded focus:outline-none focus:shadow-outline
                center cursor-pointer disabled:bg-gray-600 disabled:text-gray-400
                disabled:cursor-auto disabled:pointer-events-none"
              >
                Adicionar despesa
              </button>
            </div>
            <div className="flex justify-center fixTableHead">
              <table
                className="table-fixed w-11/12 mt-5 text-white text-center"
              >
                <thead className="bg-gray-800">
                  <th>Descrição</th>
                  <th>Tag</th>
                  <th>Método de pagamento</th>
                  <th>Valor</th>
                  <th>Moeda</th>
                  <th>Câmbio utilizado</th>
                  <th>Valor convertido</th>
                  <th>Moeda de conversão</th>
                  <th>Editar/Excluir</th>
                </thead>
                <tbody>
                  {expenses.length > 0
                    && expenses.map((elem) => (
                      <Expense key={ elem.id } expenses={ elem } />))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchApi()),
  fetchAll: (expenses, id) => dispatch(fetchApiAll(expenses, id)),
  addExpense: (value, id) => dispatch(actionAddExpense(value, id)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchAll: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
