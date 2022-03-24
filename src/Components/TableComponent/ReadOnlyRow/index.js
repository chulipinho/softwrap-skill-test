import React from "react";
import { ButtonComponent } from "../../ButtonComponent";
import {AiOutlineEdit} from "react-icons/ai";
import {IoClose} from "react-icons/io5";

export const ReadOnlyRow = ({ entry, bgColor }) => {

    return (
        <tr>
            {Object.entries(entry).map(e => {
                return (
                    <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                        <p className="text-gray-900 whitespace-no-wrap">
                            {e[1]}
                        </p>
                    </td>
                )
            })}
            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='blue'>
                    <AiOutlineEdit/>
                </ButtonComponent>
            </td>
            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='red'>
                    <IoClose size={150}/>
                </ButtonComponent>
                </td>
        </tr>
    )
}