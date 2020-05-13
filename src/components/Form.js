import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const Form = ({ fields, values, onSubmit }) => {
  const initialState = fields.reduce(
    (acc, { name }) => ({
      ...acc,
      [name]: values[name] || '',
    }),
    {},
  );
  const [data, updateData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const submit = () => {
    const newErrors = Object.entries(data)
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

    return onSubmit(data);
  };

  const setData = (key, value) =>
    updateData({
      ...data,
      [key]: value,
    });

  const onTextFieldChange = key => ({ target: { value } }) =>
    setData(key, value);

  return (
    <form>
      {fields.map(({ name, label }) => (
        <FormControl key={name} fullWidth margin="normal" required>
          <TextField
            error={!!errors[name]}
            helperText={errors[name]}
            label={label}
            variant="filled"
            value={data[name] || ''}
            onChange={onTextFieldChange(name)}
          />
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
};

export default Form;
