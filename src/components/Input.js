import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, id, testeid, onchange, value } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          id={ id }
          data-testid={ `${testeid}-input` }
          onChange={ onchange }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testeid: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
