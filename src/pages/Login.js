import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { actionNewUser } from '../actions';
import Wallet from '../images/walletIcon.svg';

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
    const { isDisabled, email, password } = this.state;
    return (
      <div className="flex justify-center items-center h-[92vh]">
        <div className="w-full max-w-xs rounded-md">
          <form
            className="bg-white shadow-md rounded px-8
            pt-6 pb-8 mb-4 flex flex-col items-center"
          >
            <div className="flex content-center my-5">
              <h1 className="text-gray-700 text-3xl font-bold uppercase">Trybewallet</h1>
              <img
                src={ Wallet }
                className="w-7 fill-gray-700 ml-2"
                alt="Uma carteira, logo trybewallet"
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                id="email"
                testeid="email"
                onchange={ this.changeState }
                value={ email }
                labelClass="block text-gray-700 text-sm font-bold mb-2"
                inputClass="appearance-none bg-transparent border-b-2
                border-gray-300 outline-none w-full text-gray-700 mr-3 py-3 px-2
                leading-tight focus:border-gray-900 transition-all
                ease-in duration-300"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                id="password"
                testeid="password"
                onchange={ this.changeState }
                value={ password }
                labelClass="block text-gray-700 text-sm font-bold mb-2"
                inputClass="appearance-none bg-transparent border-b-2
                border-gray-300 outline-none w-full text-gray-700 mr-3 py-3 px-2
                leading-tight focus:border-gray-900 transition-all
                ease-in duration-300"
                placeholder="Senha"
              />
            </div>
            <div className="flex justify-center w-full">
              <button
                type="button"
                disabled={ isDisabled }
                onClick={ this.saveInfo }
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2
                px-4 rounded focus:outline-none focus:shadow-outline
                center cursor-pointer disabled:bg-gray-600 disabled:text-gray-400
                disabled:cursor-auto disabled:pointer-events-none w-full"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (value) => dispatch(actionNewUser(value)),
});

Login.propTypes = {
  history: PropTypes.arrayOf([PropTypes.object]).isRequired,
  newUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
