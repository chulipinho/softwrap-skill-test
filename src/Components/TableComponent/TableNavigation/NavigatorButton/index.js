import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { AppColors } from "../../../../Assets/Styles/AppColors";

export const NavigatorButton = ({ onClick, children, disabled = false }) => {

    const mainColor = disabled ? AppColors.disabled.mainColor : AppColors.navigatorButton.mainColor;
    const hoverColor = disabled ? AppColors.disabled.hoverColor : AppColors.navigatorButton.hoverColor;

    return (
        <button onClick={onClick} type="button" className={`w-full px-4 py-2 border-t border-b text-base text-indigo-500 ${mainColor} ${hoverColor}`} >
            {children}
        </button>
    )
};