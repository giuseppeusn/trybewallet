import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, id, testeid, onchange, value,
      labelClass, inputClass, placeholder } = this.props;
    return (
      <label htmlFor={ id } className={ labelClass }>
        {label}
        <input
          type={ type }
          id={ id }
          data-testid={ `${testeid}-input` }
          onChange={ onchange }
          value={ value }
          className={ inputClass }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testeid: PropTypes.string,
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  testeid: '',
  value: '',
  labelClass: '',
  inputClass: '',
  placeholder: '',
};

export default Input;
