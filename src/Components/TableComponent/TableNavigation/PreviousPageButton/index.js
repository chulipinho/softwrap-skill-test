import React from 'react'
import { AppColors } from '../../../../Assets/Styles/AppColors';

export const PreviousPageButton = ({ onClick, disabled = false }) => {
    
    const mainColor = disabled ? AppColors.disabled.mainColor : AppColors.navigatorButton.mainColor;
    const hoverColor = disabled ? AppColors.disabled.hoverColor : AppColors.navigatorButton.hoverColor;

    return (
        <button type="button" onClick={disabled ? null : onClick} className={`w-full p-4 border text-base rounded-l-xl text-gray-600 ${mainColor} ${hoverColor}`}>
            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                </path>
            </svg>
        </button>
    )
}
