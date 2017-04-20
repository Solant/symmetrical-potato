import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import validate from './BookFormValidation';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const isValid = () => { return error ? 'error' : 'success' };

  return (
    <FormGroup validationState={isValid(error)}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type} />
      <FormControl.Feedback />
      {touched && error && <span>{error}</span>}
    </FormGroup>
  )
};

class BookForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="Author First Name" />
        <Field name="lastName" component={renderField} type="text" label="Author Last Name" />
        <Field name="title" component={renderField} label="Book Title" />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

// Decorate the form component

export default reduxForm({
  form: 'book',
  validate,
})(BookForm);
