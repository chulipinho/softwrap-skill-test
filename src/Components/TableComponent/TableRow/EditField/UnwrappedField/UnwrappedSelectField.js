import React, { useRef } from 'react';

export const UnwrappedSelectField = ({ label, options, name, initialValue, handleChange }) => {
    const inputRef = useRef(null);

    return (<td>
        <select ref={inputRef} name={name} value={initialValue} onChange={handleChange} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`}>
            {options.map((e, index) => <option key={index}>{e}</option>)}
        </select>
    </td>
    )
}