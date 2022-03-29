import React from "react";
import { AppColors } from "../../Assets/Styles/AppColors";

export const ButtonComponent = ({onClick, children, color, ...rest}) => {

    const mainColor = AppColors[color].mainColor;
    const hoverColor = AppColors[color].hoverColor;

    return(
        <button onClick={onClick} {...rest} className={`py-2 float-right px-4 flex justify-center items-center ${hoverColor} ${mainColor}  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md  w-12 h-12 rounded-lg `}>
            {children}
        </button>
    )
};