import { TableHeading } from "./TableHeading";
import { TableNavigation } from "./TableNavigation";
import { TableRow } from "./TableRow";

const tableBackgroundColor = 'bg-white';

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
                                        {fields.map((e, index) => <TableHeading key={index} bgColor={tableBackgroundColor}>{e}</TableHeading>)}
                                        <th scope="col" className={`px-5 py-3 ${tableBackgroundColor}  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal`} />
                                        <th scope="col" className={`px-5 py-3 ${tableBackgroundColor}  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal`} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(e => <TableRow key={e[0]} entry={e[1]} bgColor={tableBackgroundColor} />)}
                                </tbody>
                            </table>
                            <TableNavigation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}