const acceptedValue = (numLimit, val, type) => {
  if (type === 'min') {
    return val < numLimit;
  }

  if (type === 'max') {
    return val > numLimit;
  }

  return `${type} length value is ${numLimit}.`;
};

export const required = value => (
  value ? undefined : 'Field Required'
);
