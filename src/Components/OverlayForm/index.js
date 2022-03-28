import React from 'react';
import { Overlay } from '../Overlay';
import { NewUserForm } from './NewUserForm';
import { OverlayFormWrapper } from './OverlayFormWrapper';

export const OverlayForm = ({ id, title }) => {
    return (
        <Overlay id={id}>
            <OverlayFormWrapper title={title}>
                <NewUserForm />
            </OverlayFormWrapper>
        </Overlay>
    )
}
