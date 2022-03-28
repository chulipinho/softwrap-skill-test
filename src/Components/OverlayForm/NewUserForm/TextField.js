import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export const TextField = ({ name, label, maxLength }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);

    const borderColor = error ? 'border-red-500' : 'border-gray-700';

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return (
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input ref={inputRef} className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${borderColor} rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`} type="text" maxLength={maxLength}/>
            <p className="text-red-500 text-xs italic mb-3">{error}</p>
        </div>
    )
}
