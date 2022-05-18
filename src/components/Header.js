import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p>
          Email:
          <span data-testid="email-field">
            {` ${email}`}
          </span>
        </p>
        <p>
          Despesas totais: R$
          <span data-testid="total-field"> 0</span>
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
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
