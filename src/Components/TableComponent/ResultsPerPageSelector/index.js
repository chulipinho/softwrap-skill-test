import React from 'react';
import useRecordsPerPage from '../../../Hooks/useRecordsPerPage';
import useCurrentPage from '../../../Hooks/useCurrentPage';

export const ResultsPerPageSelector = () => {
    const { recordsPerPage, changeRecordsPerPage } = useRecordsPerPage();
    const changePage = useCurrentPage().changePage;

    function handleChange(event) {
        changeRecordsPerPage(event.target.value);
        changePage(1);
    }

    return (
        <>
            <select value={recordsPerPage} onChange={handleChange} className={`form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
        </>
    );
};
