import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { actionAddExpense, fetchApi, fetchApiAll } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';
import Expense from '../components/Expense';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  changeState = ({ target }) => {
    this.setState({ [target.id]: target.value });
  }

  cleanInput = () => {
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    const { currencies, expenses, fetchAll } = this.props;
    return (
      <div>
        <Header />
        <div>
          <Input
            label="Valor"
            type="number"
            id="value"
            testeid="value"
            onchange={ this.changeState }
            value={ value }
          />
          <Input
            label="Descrição"
            type="text"
            id="description"
            testeid="description"
            onchange={ this.changeState }
            value={ description }
          />
          <Select
            values={ currencies }
            id="currency"
            label="Moeda"
            onchange={ this.changeState }
          />
          <Select
            values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            id="method"
            label="Método de pagamento"
            testeid="method"
            onchange={ this.changeState }
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
          />
          <button
            type="button"
            onClick={ () => {
              fetchAll(this.state, expenses.length);
              this.cleanInput();
            } }
          >
            Adicionar despesa
          </button>
        </div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.length > 0
            && expenses.map((elem) => <Expense key={ elem.id } expenses={ elem } />)}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
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
  fetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchAll: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
