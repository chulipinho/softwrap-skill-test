import React from 'react';
import useCurrentPage from '../../../Hooks/useCurrentPage';
import useNumberOfPages from '../../../Hooks/useNumberOfPages';
import { NavigatorButton } from './NavigatorButton';
import { NextPageButton } from './NextPageButton';
import { PreviousPageButton } from './PreviousPageButton';

export const TableNavigation = () => {

    const { currentPage, changePage } = useCurrentPage();
    const numberOfPages = useNumberOfPages().numberOfPages;

    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
            <div className="flex items-center">
                <PreviousPageButton onClick={() => {changePage(currentPage - 1)}} disabled={currentPage <= 1} />
                {pageNumbers.map(i => {
                    return (<NavigatorButton
                        key={i}
                        onClick={() => {
                            changePage(i);
                        }}
                        disabled={currentPage === i}
                        >{i}</NavigatorButton>)
                })}
                <NextPageButton onClick={() => {changePage(currentPage + 1)}} disabled={currentPage >= numberOfPages} />
            </div>
        </div>
    )
}
