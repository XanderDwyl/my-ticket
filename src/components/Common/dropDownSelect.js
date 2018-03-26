import React from 'react';
import { STATUS } from '../../constants';

const styles = {
  error: {
    fontSize: "13px",
    color: "red"
  }
}

const renderSelectOptions = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label style={styles.label}>{label}</label>
    <select style={styles.select} {...input}>
      <option value=""></option>
      <option value={STATUS.TODO}>Todo</option>
      <option value={STATUS.DONE}>Done</option>
      <option value={STATUS.CLOSE}>Close</option>
    </select>
    
    {touched &&
      ((error && <span style={styles.error}>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

export default renderSelectOptions;
