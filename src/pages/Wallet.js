import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchApi } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <div>
          <Input label="Valor" type="number" id="value" testeid="value" />
          <Input
            label="Descrição"
            type="text"
            id="desc"
            testeid="description"
          />
          <Select values={ currencies } id="moedas" label="Moeda" />
          <Select
            values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            id="method"
            label="Método de pagamento"
            testeid="method"
          />
          <Select
            values={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            id="tag"
            label="Categoria"
            testeid="tag"
          />
        </div>
        TrybeWallet
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  fetch: PropTypes.func.isRequired,
  currencies: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
