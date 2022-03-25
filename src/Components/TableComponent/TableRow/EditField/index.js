import React from 'react';

export const EditField = ({ name, bgColor }) => {
  return (
    <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
    <input 
        type='text' 
        required='required'
        name={name}
    ></input>
</td>
  )
}
