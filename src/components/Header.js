import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumValues = () => {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((elem) => {
      const exchange = Object.values(elem.exchangeRates);
      const currency = exchange.find((item) => item.code === elem.currency).ask;
      sum += currency * elem.value;
    });

    return sum.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <p>
          Email:
          <span data-testid="email-field">{` ${email}`}</span>
        </p>
        <p>
          Despesas totais: R$
          <span data-testid="total-field">
            {expenses.length > 0 ? this.sumValues() : 0}
          </span>
        </p>
        <p>
          Moeda:
          <span data-testid="header-currency-field"> BRL</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
