import React from "react";

export const TableHeading = ({ children, bgColor }) => {
    return (
        <th scope="col" className={`px-5 py-3 ${bgColor} border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold`}>{children}</th>
    )
}