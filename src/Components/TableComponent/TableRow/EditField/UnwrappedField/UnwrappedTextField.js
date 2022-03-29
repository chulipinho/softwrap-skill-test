import React, { useRef } from 'react';

export const UnwrappedTextField = ({ name, handleChange, initialValue, error }) => {
    const inputRef = useRef(null);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    return (
        <td className={`px-5 py-5 border-b border-gray-200 text-sm`}>
            <input value={initialValue} ref={inputRef} name={name} onChange={handleChange} className={`border-b border-gray-200 appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength='25' />
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </td>
    )
}
