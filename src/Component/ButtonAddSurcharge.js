import React from "react";
import { Button, Container } from "reactstrap";

function ButtonAddSurcharge(props) {
  let { onHandleShowForm } = props;
  let handleClick = () => {
    onHandleShowForm();
  };
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleClick}>
        + Create New Surcharge
      </Button>
    </Container>
  );
}

export default ButtonAddSurcharge;
