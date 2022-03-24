import React from "react";

const TableHeading = ({ children }) => {
    return (
        <th>{children}</th>
    )
}

const TableRow = ({ entry }) => {

    return (
        <tr>
            {Object.entries(entry).map(e => <td>{e[1]}</td>)}
        </tr>
    )
}

export const TableComponent = ({ fields, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {fields.map(e => <TableHeading>{e}</TableHeading>)}
                </tr>
            </thead>
            <tbody>
                {data.map(e => <TableRow entry={e} />)}
            </tbody>
        </table>
    )
}