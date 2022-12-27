import Table from "react-bootstrap/Table";

function ListAppointment({ infoList }) {
  console.log("infoList", infoList);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Informacion</th>
        </tr>
      </thead>
      <tbody>
        {infoList.map((info) => {
          return (
            <tr>
              <td>{info.updated}</td>
              <td>{info.description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListAppointment;
