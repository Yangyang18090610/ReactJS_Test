import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
function InputForm(props) {
  let { onHandleCreate } = props;
  let [surchargeName, setSurchargeName] = useState("");
  let [type, setType] = useState("true");
  let [price, setPrice] = useState("");
  let [select, setSelect] = useState("");
  let handleCreate = () => {
    let surchargeNew = {
      surchargeName: surchargeName,
      price: price,
      select: select,
    };
    onHandleCreate(surchargeNew);
  };
  return (
    <Container className="form-container">
      <Form>
        <FormGroup>
          <Label for="surchargeName">Tên phụ phí: </Label>
          <Input
            id="surchargeName"
            name="surchargeName"
            placeholder="Điền tên phụ phí"
            type="text"
            value={surchargeName}
            onChange={(event) => {
              setSurchargeName(event.target.value);
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="type">Lựa chọn thành tiền hoặc tỷ lệ: </Label>
          <Input
            id="type"
            name="type"
            type="select"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value={"true"}>Thành tiền</option>
            <option value={"false"}>Tỷ lệ</option>
          </Input>
        </FormGroup>
        <br />
        {type == "true" && (
          <FormGroup>
            <Label for="price">Tiền phụ phí: </Label>
            <Input
              id="price"
              name="price"
              type="nupricember"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </FormGroup>
        )}
        {type == "false" && (
          <FormGroup>
            <Label for="select">Lựa chọn phụ phí: </Label>
            <Input
              id="select"
              name="select"
              type="select"
              value={select}
              onChange={(event) => {
                setSelect(event.target.value);
              }}
            >
              <option value={"pp1"}>PP1</option>
              <option value={"pp2"}>PP2</option>
              <option value={"pp3"}>PP3</option>
            </Input>
          </FormGroup>
        )}
      </Form>
      <br />
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </Container>
  );
}

export default InputForm;
