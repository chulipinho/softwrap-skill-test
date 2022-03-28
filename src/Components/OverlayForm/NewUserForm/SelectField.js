import React, { useEffect, useRef} from 'react';
import { useField } from '@unform/core'

export const SelectField = ({ label, options, name }) => {

    const inputRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);


    return (<div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label}
        </label>
        <select ref={inputRef} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white`}>
            {options.map((e, index) => <option key={index}>{e}</option>)}
        </select>
    </div>
    )
}