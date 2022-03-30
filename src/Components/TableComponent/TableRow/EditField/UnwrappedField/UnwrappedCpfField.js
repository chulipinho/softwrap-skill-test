import React, { useState, useEffect, useRef } from 'react';
import { cpfMask } from '../../../../../Utils/Masks/cpfMask';

export const UnwrappedCpfField = ({ name, error, initialValue, handleChange }) => {
    
    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    return (
        <>
            <input value={initialValue} onChange={handleChange} name={name} className={`border-b mt-1 border-gray-200 appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength='14' />
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </>
    )
}
