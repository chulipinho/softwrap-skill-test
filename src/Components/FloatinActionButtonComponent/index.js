import React from 'react';
import { AppColors } from '../../Assets/Styles/AppColors';

function FloatingActionButtonComponent({ children, color, targetId }) {

    const mainColor = AppColors[color].mainColor;
    const hoverColor = AppColors[color].hoverColor;
    const dataBsTarget = '#' + targetId;

    return (
        <button type="button" className={`fixed bottom-12 right-12 py-4 px-4  ${mainColor} ${hoverColor} text-white transition ease-in duration-200 text-center text-base w-14 h-14 font-semibold shadow-md rounded-full`} data-bs-toggle="modal" data-bs-target={dataBsTarget}>
            {children}
        </button>
    )
}

export default FloatingActionButtonComponent;