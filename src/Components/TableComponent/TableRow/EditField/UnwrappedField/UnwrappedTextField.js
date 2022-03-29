import React, { useRef } from 'react';

export const UnwrappedTextField = ({ name, label, maxLength, handleChange, initialValue, error }) => {
    const inputRef = useRef(null);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    return (
        <td>
            <input value={initialValue} ref={inputRef} name={name} onChange={handleChange} className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength={maxLength} />
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </td>
    )
}
