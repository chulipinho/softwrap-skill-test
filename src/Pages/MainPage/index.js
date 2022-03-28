import FloatingActionButtonComponent from '../../Components/FloatinActionButtonComponent';
import { TableComponent } from '../../Components/TableComponent';
import { IoMdAdd } from 'react-icons/io';
import useUsers from '../../Hooks/useUsers';
import usePagination from '../../Hooks/usePagination';
import useCurrentPage from '../../Hooks/useCurrentPage';
import useRecordsPerPage from '../../Hooks/useRecordsPerPage';
import useNumberOfPages from '../../Hooks/useNumberOfPages';
import {CircularLoading} from '../../Components/CircularLoadingComponent'
import { OverlayForm } from '../../Components/OverlayForm';



function MainPage() {
    const tableFieldsMock = ["Nome", "Idade", "Estado Civil", "CPF", "Cidade", "Estado"];

    const { recordsPerPage, changeRecordsPerPage } = useRecordsPerPage();
    const users = useUsers();
    const currentPage = useCurrentPage().currentPage;
    const { numberOfPages, buildRecords } = usePagination(users, recordsPerPage);
    useNumberOfPages(numberOfPages);

    const displayedData = buildRecords(currentPage);

    return (
        <div>
            {(() => {
                if (users === 'loading') {
                    return (<CircularLoading/>)
                }
                return <TableComponent fields={tableFieldsMock} data={displayedData} />
            })()}

            <FloatingActionButtonComponent color='blue' targetId='addNewEntry'><IoMdAdd size={25} /></FloatingActionButtonComponent>
            <OverlayForm id='addNewEntry' title='Adicionar um novo usuário' />
        </div>
    )
}

export default MainPage;