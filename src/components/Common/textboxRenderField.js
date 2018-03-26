import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  error: {
    fontSize: "13px",
    color: "red"
  }
}

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div style={styles.row}>
    <label style={styles.label}>{label}</label>
    <input style={styles.input} {...input} type={type} />
    {touched &&
      ((error && <span style={styles.error}>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

RenderField.propTypes = {
  label: PropTypes.string, // eslint-disable-line
  input: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.any,
    error: PropTypes.any,
    warning: PropTypes.any,
  }).isRequired,
};

export default RenderField;
