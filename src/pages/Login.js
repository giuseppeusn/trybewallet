import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { actionNewUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  changeState = ({ target }) => {
    this.setState({ [target.id]: target.value },
      () => {
        this.verifyInfo();
      });
  }

  checkEmail = (email) => {
    const emailArray = email.split('');
    const hasAtSign = emailArray.find((e) => e === '@');
    const hasDotCom = email.endsWith('.com');

    if (hasAtSign && hasDotCom) return true;

    return false;
  }

  verifyInfo = () => {
    const { email, password } = this.state;
    const isEmail = this.checkEmail(email);
    const minPass = 6;

    if (isEmail && password.length >= minPass) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  saveInfo = () => {
    const { email } = this.state;
    const { history, newUser } = this.props;
    history.push('/carteira');
    newUser(email);
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <Input
          label="Email"
          type="text"
          id="email"
          testeid="email"
          onchange={ this.changeState }
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          testeid="password"
          onchange={ this.changeState }
        />
        <button type="button" disabled={ isDisabled } onClick={ this.saveInfo }>
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (value) => dispatch(actionNewUser(value)),
});

Login.propTypes = {
  history: PropTypes.shape.isRequired,
  newUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
