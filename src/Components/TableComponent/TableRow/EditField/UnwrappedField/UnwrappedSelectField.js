import React, { useRef } from 'react';

export const UnwrappedSelectField = ({ error, options, name, initialValue, handleChange }) => {
    const inputRef = useRef(null);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    return (
        <>
            <select ref={inputRef} name={name} value={initialValue} onChange={handleChange} className={`border-b border-gray-200 appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white`}>
                {options.map((e, index) => <option key={index}>{e}</option>)}
            </select>
        </>
    )
}