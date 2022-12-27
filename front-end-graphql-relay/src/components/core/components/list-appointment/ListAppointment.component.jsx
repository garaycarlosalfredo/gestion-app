import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function ListAppointment({ infoList }) {
  console.log("infoList", infoList);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Informacion</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {infoList.map((info) => {
          return (
            <tr>
              <td>{info.updated}</td>
              <td>{info.description}</td>
              <td>
                <DropdownButton
                  size="sm"
                  variant="secondary"
                  title="Drop small"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListAppointment;
