import React from 'react';
import { UnwrappedCpfField, UnwrappedSelectField, UnwrappedTextField } from './UnwrappedField';

export const EditField = ({ name, selectValues, userId, initialValue, handleChange }) => {

  if (name === 'cpf') {
    return (
      <UnwrappedCpfField
        name={name}
        initialValue={initialValue}
      />
    )
  }
  if (name === 'maritalStatus') {
    return (
      <UnwrappedSelectField
        name={name}
        options={selectValues}
        initialValue={initialValue}
        handleChange={handleChange}
      />
    )
  }

  return (
    <UnwrappedTextField
      userId={userId}
      name={name}
      initialValue={initialValue}
      handleChange={handleChange}
    />
  );
}
