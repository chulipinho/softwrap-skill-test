import React from "react";
import { ButtonComponent } from "../../ButtonComponent";
import { AiOutlineEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { ReadOnlyField } from "./ReadOnlyField";
import { EditField } from "./EditField";

export const TableRow = ({ entry, bgColor, edit = false }) => {
    const orderedKeys = ["name", "age", "maritalStatus", "cpf", "city", "state"];

    return (
        <tr>
            {orderedKeys.map((e) => {
                const data = entry[e];

                return edit
                    ? <EditField bgColor={bgColor} key={e}>{data}</EditField>
                    : <ReadOnlyField bgColor={bgColor} key={e}>{data}</ReadOnlyField>
            })}

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='blue'>
                    <AiOutlineEdit />
                </ButtonComponent>
            </td>

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent color='red'>
                    <IoClose size={150} />
                </ButtonComponent>
            </td>
        </tr>
    )
}