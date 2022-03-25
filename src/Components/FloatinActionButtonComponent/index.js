import React from 'react';

function FloatingActionButtonComponent({ children, color }) {

    const colors = {
        'red': {
            mainColor: 'bg-red-600',
            hoverColor: 'hover:bg-red-700'
        },
        'green': {
            mainColor: 'bg-green-600',
            hoverColor: 'hover:bg-green-700'
        },
        'blue': {
            mainColor: 'bg-blue-600',
            hoverColor: 'hover:bg-blue-700'
        }
    };

    const mainColor = colors[color].mainColor;
    const hoverColor = colors[color].hoverColor;

    return (
        <button type="button" className={`fixed bottom-12 right-12 py-4 px-4  ${mainColor} ${hoverColor} text-white transition ease-in duration-200 text-center text-base w-14 h-14 font-semibold shadow-md rounded-full`}>
            {children}
        </button>
    )
}

export default FloatingActionButtonComponent;