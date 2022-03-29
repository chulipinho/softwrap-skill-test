import React, { useState } from "react";
import { ButtonComponent } from "../../ButtonComponent";
import { AiOutlineEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ReadOnlyField } from "./ReadOnlyField";
import { EditField } from "./EditField";
import Database from "../../../Singletons/database";
import { formConfig } from '../../../Config/formConfig';
import * as Yup from 'yup';

export const TableRow = ({ entry, bgColor, userId }) => {
    const dataConfig = formConfig;
    const database = Database.getInstance();
    const [errors, setErrors] = useState({});

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

    async function handleSubmit() {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório!'),
                age: Yup.number().nullable(false).typeError('A idade deve ser um número').required('A idade é obrigatória'),
                cpf: Yup.string().length(14, 'Insira um CPF válido').required('O cpf é obrigatório!'),
                maritalStatus: Yup.string().required('O estado civil é obrigatório'),
                city: Yup.string().required('A cidade é obrigatória!'),
                state: Yup.string().required('O estado é obrigatório!')
            })

            await schema.validate(currentUser, {
                abortEarly: false
            })

            database.updateEntry(userId, currentUser);
            alert("Dados atualizados com sucesso!");
            setIsEdit(false);
            setErrors({});

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })
                setErrors(errorMessages);
            }
        }
    };

    function deleteUser() {
        if (window.confirm(`Você realmente deseja excluir o usuário ${entry.name}?\nEsta operação não pode ser desfeita.`)) {
            database.deleteEntry(userId);
        }
    }

    return (
        <tr>
            {dataConfig.map((e, index) => {
                const data = currentUser[e.name];
                console.log(errors)

                return isEdit
                    ? <EditField selectValues={e.selectValues} error={errors[e.name]} name={e.name} key={index} initialValue={data} handleChange={handleChange} />
                    : <ReadOnlyField bgColor={bgColor} key={index}>{data}</ReadOnlyField>
            })}

            <td className={`px-2 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
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
                                handleSubmit()
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
                                setErrors({});
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