import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, id, testeid, onchange, value,
      labelClass, inputClass, placeholder, className } = this.props;
    return (
      <div className={ className }>
        <label htmlFor={ id } className={ labelClass }>
          {label}
        </label>
        <input
          type={ type }
          id={ id }
          data-testid={ `${testeid}-input` }
          onChange={ onchange }
          value={ value }
          className={ inputClass }
          placeholder={ placeholder }
          maxLength="12"
        />
      </div>
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
  className: PropTypes.string,
};

Input.defaultProps = {
  testeid: null,
  value: null,
  labelClass: null,
  inputClass: null,
  placeholder: null,
  className: null,
};

export default Input;
