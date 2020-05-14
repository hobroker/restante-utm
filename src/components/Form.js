import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const Form = ({ fields, values, onSubmit, data }) => {
  const initialState = fields.reduce(
    (acc, { name }) => ({
      ...acc,
      [name]: values[name] || '',
    }),
    {},
  );
  const [localValues, updateData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const submit = () => {
    const newErrors = Object.entries(localValues)
      .filter(([, value]) => !value)
      .reduce(
        (acc, [key]) => ({
          ...acc,
          [key]: 'Campul este obligatoriu',
        }),
        {},
      );

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);

      return;
    }

    setErrors({});

    return onSubmit(localValues);
  };

  const setData = (key, value) =>
    updateData({
      ...localValues,
      [key]: value,
    });

  const onTextFieldChange = key => ({ target: { value } }) =>
    setData(key, value);

  return (
    <form>
      {fields.map(({ name, label, type, dataKey }) => (
        <FormControl key={name} fullWidth margin="normal" required>
          <TextField
            error={!!errors[name]}
            helperText={errors[name]}
            label={label}
            variant="filled"
            value={localValues[name] || ''}
            type={type}
            onChange={onTextFieldChange(name)}
            select={type === 'select'}
          >
            {type === 'select' &&
              data[dataKey] &&
              data[dataKey].map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
          </TextField>
        </FormControl>
      ))}
      <FormControl margin="normal">
        <Button variant="contained" color="primary" onClick={submit}>
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

Form.defaultProps = {
  values: {},
  data: {},
};

export default Form;
