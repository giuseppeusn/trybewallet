import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BrazilFlag from '../images/brazil-flag-icon.svg';
import Wallet from '../images/walletIconWhite.svg';
import UserIcon from '../images/user-icon.svg';
import MoneyIcon from '../images/money-icon.svg';
import CoinIcon from '../images/coin-icon.svg';

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
    const maxLengthEmail = 18;
    return (
      <div className="flex justify-around items-center py-3 bg-gray-800">
        <div className="flex content-center">
          <h1 className="text-white text-3xl font-bold uppercase">Trybewallet</h1>
          <img
            src={ Wallet }
            className="w-7 ml-2"
            alt="Uma carteira, logo trybewallet"
          />
        </div>
        <div className="flex">
          <img
            src={ UserIcon }
            className="bg-gray-600 text-white p-1.5 rounded-l w-8"
            alt="user icon"
          />
          <p data-testid="email-field" className="bg-white py-1 px-1.5 rounded-r w-44">
            { email.length > maxLengthEmail
              ? `${email.substr(0, maxLengthEmail)}...` : email }
          </p>
        </div>
        <div className="flex">
          <img
            src={ MoneyIcon }
            className="bg-gray-600 text-white p-1.5 rounded-l w-8"
            alt="user icon"
          />
          <p data-testid="total-field" className="bg-white py-1 px-1.5 rounded-r">
            {`Total: R$ ${expenses.length > 0 ? this.sumValues() : 0}` }
          </p>
        </div>
        <div className="flex content-center w-32">
          <img
            src={ CoinIcon }
            className="bg-gray-600 text-white p-1.5 rounded-l w-8"
            alt="user icon"
          />
          <img src={ BrazilFlag } className="bg-white pl-1 w-6" alt="brazil flag" />
          <span
            data-testid="header-currency-field"
            className="bg-white  py-1 px-1.5 rounded-r"
          >
            BRL
          </span>
        </div>
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
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
