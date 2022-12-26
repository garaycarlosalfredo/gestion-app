import Card from "react-bootstrap/Card";

function BasicExample({ user, cardClass }) {
  console.log("BasicExample", user);
  return (
    <Card className={`${cardClass}`} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{`${user?.lastName}, ${user?.firstName}`} </Card.Title>
        <Card.Text>
          <div>{`teléfono: ${user?.phone}`}</div>
          <div>{`email: ${user?.email}`}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
