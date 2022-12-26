import Table from "react-bootstrap/Table";

function ListHistory({ infoList }) {
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
              <td>{info.date}</td>
              <td>{info.information}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListHistory;
