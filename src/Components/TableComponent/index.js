import React from "react";
import { ButtonComponent } from "../ButtonComponent";
import {IoClose} from 'react-icons/io5'
import {AiOutlineEdit} from 'react-icons/ai'

const tableBackgroundColor = 'bg-white';

const TableHeading = ({ children }) => {
    return (
        <th scope="col" className={`px-5 py-3 ${tableBackgroundColor} border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold`}>{children}</th>
    )
}

const TableRow = ({ entry }) => {

    return (
        <tr>
            {Object.entries(entry).map(e => {
                return (
                    <td className={`px-5 py-5 border-b border-gray-200 ${tableBackgroundColor} text-sm`}>
                        <p className="text-gray-900 whitespace-no-wrap">
                            {e[1]}
                        </p>
                    </td>
                )
            })}
            <td className={`px-5 py-5 border-b border-gray-200 ${tableBackgroundColor} text-sm`}>
                <ButtonComponent color='blue'>
                    <AiOutlineEdit/>
                </ButtonComponent>
            </td>
            <td className={`px-5 py-5 border-b border-gray-200 ${tableBackgroundColor} text-sm`}>
                <ButtonComponent color='red'>
                    <IoClose size={150}/>
                </ButtonComponent>
                </td>
        </tr>
    )
}

export const TableComponent = ({ fields, data }) => {
    return (
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
            <div className="py-8">
                <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        {fields.map(e => <TableHeading>{e}</TableHeading>)}
                                        <th scope="col" className={`px-5 py-3 ${tableBackgroundColor}  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal`} />
                                        <th scope="col" className={`px-5 py-3 ${tableBackgroundColor}  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal`} />                                
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(e => <TableRow entry={e} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}