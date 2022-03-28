import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { TextField } from './TextField';
import { FormFooter } from './FormFooter';
import { formConfig } from '../../../Config/formConfig';
import { SelectField } from './SelectField';
import { CpfField } from './CpfField';
import Database from '../../../Singletons/database'

export const NewUserForm = () => {
    const database = Database.getInstance();
    const formRef = useRef(null);

    const fields = formConfig;

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório!'),
                age: Yup.number().nullable(false).typeError('A idade deve ser um número').required('A idade é obrigatória'),
                cpf: Yup.string().length(14, 'Insira um CPF válido').required('O cpf é obrigatório!'),
                city: Yup.string().required('A cidade é obrigatória!'),
                state: Yup.string().required('O estado é obrigatório!')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            database.createEntry(data);
            formRef.current.setErrors({});

            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })
                formRef.current.setErrors(errorMessages);
            }
        }
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            {fields.map((e, index) => {
                if (e.type === 'select') {
                    return (<SelectField key={index} label={e.label} name={e.name} options={e.selectValues} />)
                }
                if (e.name === 'cpf') return (<CpfField key={index} name={e.name} />);

                return (<TextField key={index} name={e.name} label={e.label} maxLength={e.maxLength} />);
            })}
            <FormFooter />
        </Form>
    );
}
