import React, { useState } from "react";
import { ButtonComponent } from "../../ButtonComponent";
import { AiOutlineEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ReadOnlyField } from "./ReadOnlyField";
import { EditField } from "./EditField";
import Database from "../../../Singletons/database";
import { formConfig } from '../../../Config/formConfig';

export const TableRow = ({ entry, bgColor, userId }) => {
    const dataConfig = formConfig;
    const database = Database.getInstance();

    const [edit, setEdit] = useState(false);
    const [currentUser, setUser] = useState(entry);

    function handleChange(event) {
        setUser(() => {
            const key = event.target.name;
            const value = event.target.value
            const newUser = { ...currentUser };

            newUser[key] = value;
            return newUser;
        })
    }

    function submitData() {
        database.updateEntry(userId, currentUser);
    }

    return (
        <tr>
            {dataConfig.map((e, index) => {
                const data = currentUser[e.name];

                return edit
                    ? <EditField selectValues={e.selectValues} name={e.name} key={index} initialValue={data} handleChange={handleChange} />
                    : <ReadOnlyField bgColor={bgColor} key={index}>{data}</ReadOnlyField>
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
                            type='submit'
                            onClick={() => {
                                setEdit(false);
                                submitData();
                            }}>
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