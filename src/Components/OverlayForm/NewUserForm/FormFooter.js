import React from 'react'
import { AppColors } from '../../../Assets/Styles/AppColors';

export const FormFooter = () => {
    
    const mainRed = AppColors.red.mainColor;
    const hoverRed = AppColors.red.hoverColor;

    const mainBlue = AppColors.blue.mainColor;
    const hoverBlue = AppColors.blue.hoverColor;

    return (
        <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
                className={`inline-block px-6 py-2.5 ${mainRed} ${hoverRed} text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out`}
                data-bs-dismiss="modal">
                Cancelar
            </button>
            <button type="submit"
                className={`inline-block px-6 py-2.5 ${mainBlue} ${hoverBlue} text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out ml-1`}>
                Salvar
            </button>
        </div>
    )
}
