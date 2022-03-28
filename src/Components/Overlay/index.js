import React from 'react';
import { AppColors } from '../../Assets/Styles/AppColors';

export const Overlay = ({ id, children }) => {
    const mainRed = AppColors.red.mainColor;
    const hoverRed = AppColors.red.hoverColor;

    const mainBlue = AppColors.blue.mainColor;
    const hoverBlue = AppColors.blue.hoverColor;

    return (
        <div className="modal backdrop-brightness-50 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id={id} tabIndex="-1" aria-labelledby={id} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    {children}
                </div>
            </div>
        </div>
    )
}
