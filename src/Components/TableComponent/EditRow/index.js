import React from "react";
import { ButtonComponent } from "../../ButtonComponent";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


// todo: implement validation

export const EditRow = ({ entry, bgColor }) => {

    return (
        <tr>
            {Object.entries(entry).map(e => {
                return (
                    <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                        <input 
                            type='text' 
                            required='required'
                            placeholder={e[1]}
                            name={e[0]}
                        ></input>
                    </td>
                )
            })}
            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='green'>
                    <TiTick />
                </ButtonComponent>
            </td>
            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='red'>
                    <IoClose />
                </ButtonComponent>
            </td>
        </tr>
    )
}