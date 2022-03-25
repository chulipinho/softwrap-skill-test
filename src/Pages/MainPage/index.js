import React from 'react';
import FloatingActionButtonComponent from '../../Components/FloatinActionButtonComponent';
import { TableComponent } from '../../Components/TableComponent';
import Database from '../../Singletons/database';
import {IoMdAdd} from 'react-icons/io';

function MainPage() {
    const database = Database.getInstance();const tableFieldsMock = ['Nome', 'Idade', 'Estado Civil', 'CPF', 'Cidade', 'Estado'];
    const mockData = require("../../Utils/mock.json");

    return (
        <div>
            <TableComponent fields={tableFieldsMock} data={mockData} />
            <FloatingActionButtonComponent color='blue'><IoMdAdd size={25}/></FloatingActionButtonComponent>
        </div>
    )
}

export default MainPage;