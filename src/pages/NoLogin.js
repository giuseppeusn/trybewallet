import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import errorIcon from '../images/errorIcon.svg';

class NoLogin extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <img
          src={ errorIcon }
          className="w-36"
          alt="Um círculo azul com um xis no meio indicando erro"
        />
        <h1 className="mt-5 text-white font-medium text-5xl uppercase">Erro!</h1>
        <h1 className="mt-8 text-white font-medium text-xl">
          Você precisa de autorização para acessar essa página!
        </h1>
        <Link to="/" className="mt-8 text-white font-medium text-xl">
          Fazer login
        </Link>
      </div>
    );
  }
}

export default NoLogin;
