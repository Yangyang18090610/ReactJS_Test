import React from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import InputForm from "./InputForm";

function ModelAdd(props) {
  let { showForm, onHandleCloseForm, onHandleCreate } = props;
  let handleCloseForm = () => {
    onHandleCloseForm();
  };
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Thêm Phụ Phí</h3>
        </ModalHeader>

        <ModalBody>
          <InputForm onHandleCreate={onHandleCreate} />
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={handleCloseForm}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModelAdd;
