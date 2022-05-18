import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, id, values, testeid } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select id={ id } data-testid={ `${testeid}-input` }>
          { values.map((elem) => (
            <option key={ elem } value={ elem }>{elem}</option>
          )) }
        </select>
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf([PropTypes.string.isRequired]).isRequired,
  testeid: PropTypes.string.isRequired,
};

export default Input;