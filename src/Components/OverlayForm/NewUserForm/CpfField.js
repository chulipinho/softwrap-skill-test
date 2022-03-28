import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { cpfMask } from '../../../Utils/Masks/cpfMask';

export const CpfField = ({ name }) => {
    const [value, setValue] = useState('');

    const inputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    function handleChange(event) {
        const newValue = cpfMask(event.target.value);
        setValue(newValue);
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });

        setValue(inputRef.current.value);
    }, [fieldName, registerField]);

    return (
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                CPF
            </label>
            <input value={value} onChange={handleChange} ref={inputRef} className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength='14' />
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </div>
    )
}
