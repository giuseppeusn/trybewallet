import React, { Component } from 'react';
import githubIcon from '../images/github-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="flex justify-around items-center bg-gray-800 text-white py-4">
        <div className="flex flex-col items-center">
          <h1>Desenvolvido por</h1>
          <h1>Giuseppe Uhlmann de Souza Nunes © 2022</h1>
        </div>
        <div className="flex justify-between w-36">
          <a href="https://github.com/giuseppeusn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={ githubIcon } className="w-7" alt="GitHub icon" />
            <p className="text-xs">External link</p>
          </a>
          <a href="https://www.linkedin.com/in/giuseppe-nunes/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={ linkedinIcon } className="w-7" alt="LinkedIn icon" />
            <p className="text-xs">External link</p>
          </a>
        </div>
        <h1>Ferramentas utilizadas: React, Redux e Tailwind</h1>
      </footer>
    );
  }
}

export default Footer;
