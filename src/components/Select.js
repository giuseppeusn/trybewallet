import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, id, values, value, testeid, onchange, inputClass, labelClass, className, optionClass } = this.props;
    return (
      <div className={ className }>
        <label htmlFor={ id } className={ labelClass }>
          {label}
        </label>
        <select
          id={ id }
          data-testid={ `${testeid}-input` }
          onChange={ onchange }
          value={ value }
          className={ inputClass }
        >
          { values.map((elem) => (
            <option className={ optionClass } key={ elem } value={ elem }>{elem}</option>
          )) }
        </select>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf([PropTypes.string.isRequired]).isRequired,
  value: PropTypes.string.isRequired,
  testeid: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};

export default Input;
