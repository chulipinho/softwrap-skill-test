import React from "react";

export const ButtonComponent = ({children, color}) => {

    const mainColor = `bg-${color}-600`;
    const hoverColor = `hover:bg-${color}-700`;

    console.log(hoverColor);

    return(
        <button className={`py-2 px-4 flex justify-center items-center ${hoverColor} ${mainColor}  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg `}>
            {children}
        </button>
    )
};