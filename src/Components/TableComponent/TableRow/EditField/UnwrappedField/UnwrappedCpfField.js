import React, { useState, useEffect, useRef } from 'react';
import { cpfMask } from '../../../../../Utils/Masks/cpfMask';

export const UnwrappedCpfField = ({ name, error, initialValue }) => {
    const [value, setValue] = useState(initialValue);

    const inputRef = useRef(null);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    function handleChange(event) {
        const newValue = cpfMask(event.target.value);
        setValue(newValue);
    }

    useEffect(() => {
        setValue(inputRef.current.value);
    }, []);

    return (
        <td>
            <input value={value} onChange={handleChange} name={name} ref={inputRef} className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength='14' />
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </td>
    )
}
