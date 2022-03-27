import React, { useState } from "react";
import { ButtonComponent } from "../../ButtonComponent";
import { AiOutlineEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ReadOnlyField } from "./ReadOnlyField";
import { EditField } from "./EditField";
import Database from "../../../Singletons/database"

export const TableRow = ({ entry, bgColor, userId }) => {
    const [edit, setEdit] = useState(false);
    const orderedKeys = ["name", "age", "maritalStatus", "cpf", "city", "state"];
    const database = Database.getInstance();

    return (
        <tr>
            {orderedKeys.map((e) => {
                const data = entry[e];

                return edit
                    ? <EditField bgColor={bgColor} key={e}>{data}</EditField>
                    : <ReadOnlyField bgColor={bgColor} key={e}>{data}</ReadOnlyField>
            })}

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                {(() => {
                    return !edit ?
                        (<ButtonComponent
                            color='blue'
                            onClick={() => setEdit(true)}>
                            <AiOutlineEdit />
                        </ButtonComponent>) :
                        (<ButtonComponent
                            color='green'
                            onClick={() => setEdit(false)}>
                            <TiTick />
                        </ButtonComponent>)
                })()}
            </td>

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent
                    onClick={() => {
                        database.deleteEntry(userId);
                    }}
                    color='red'>
                    <IoClose size={150} />
                </ButtonComponent>
            </td>
        </tr>
    )
}