import { TableComponent } from './Components/TableComponent';

const tableFieldsMock = ['Nome', 'Idade', 'Estado Civil', 'CPF', 'Cidade', 'Estado'];
const mockData = require("./Utils/mock.json");

function App() {
  return (
    <TableComponent fields={tableFieldsMock} data={mockData}/>
  );
}

export default App;
