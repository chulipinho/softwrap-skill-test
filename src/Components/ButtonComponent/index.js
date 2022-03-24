import React from "react";

export const ButtonComponent = ({children, color}) => {

    const colors = {
        'red': {
            mainColor: 'bg-red-600',
            hoverColor: 'bg-red-700'
        },
        'green': {
            mainColor: 'bg-green-600',
            hoverColor: 'bg-green-700'
        },
        'blue': {
            mainColor: 'bg-blue-600',
            hoverColor: 'bg-blue-700'
        }
    }

    const mainColor = colors[color].mainColor;
    const hoverColor = colors[color].hoverColor;

    return(
        <button className={`py-2 px-4 flex justify-center items-center ${hoverColor} ${mainColor}  text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md  w-12 h-12 rounded-lg `}>
            {children}
        </button>
    )
};