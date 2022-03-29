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

    const [isEdit, setIsEdit] = useState(false);
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
        alert("Dados atualizados com sucesso!");
    }

    function deleteUser() {
        if (window.confirm(`Você realmente deseja excluir o usuário ${entry.name}?\nEsta operação não pode ser desfeita.`)) {
            database.deleteEntry(userId);
        }
    }

    return (
        <tr>
            {dataConfig.map((e, index) => {
                const data = currentUser[e.name];

                return isEdit
                    ? <EditField selectValues={e.selectValues} name={e.name} key={index} initialValue={data} handleChange={handleChange} />
                    : <ReadOnlyField bgColor={bgColor} key={index}>{data}</ReadOnlyField>
            })}

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                {(() => {
                    return !isEdit ?
                        (<ButtonComponent
                            color='blue'
                            onClick={() => setIsEdit(true)}>
                            <AiOutlineEdit />
                        </ButtonComponent>) :
                        (<ButtonComponent
                            color='green'
                            type='submit'
                            onClick={() => {
                                setIsEdit(false);
                                submitData();
                            }}>
                            <TiTick />
                        </ButtonComponent>)
                })()}
            </td>

            <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
                <ButtonComponent
                    onClick={() => {
                        if (isEdit) {
                            if (window.confirm('Deseja cancelar a operação de edição?')) {
                                setIsEdit(false);
                                setUser(entry);
                            }
                            return;
                        }
                        deleteUser();
                    }}
                    color='red'>
                    <IoClose size={150} />
                </ButtonComponent>
            </td>
        </tr>
    )
}