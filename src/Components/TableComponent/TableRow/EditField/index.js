import React from 'react';
import { UnwrappedCpfField, UnwrappedSelectField, UnwrappedTextField } from './UnwrappedField';

export const EditField = ({ name, selectValues, userId, initialValue, handleChange, error }) => {
  console.log(error);

  return (<td className={`px-3 py-5 border-b border-gray-200 text-sm`}>
    {(() => {
      if (name === 'cpf') {
        return (
          <UnwrappedCpfField
            error={error}
            name={name}
            initialValue={initialValue}
          />
        )
      }
      if (name === 'maritalStatus') {
        return (
          <UnwrappedSelectField
            error={error}
            name={name}
            options={selectValues}
            initialValue={initialValue}
            handleChange={handleChange}
          />
        )
      }

      return (
        <UnwrappedTextField
          error={error}
          userId={userId}
          name={name}
          initialValue={initialValue}
          handleChange={handleChange}
        />
      );
    })()}
  </td>);
}
