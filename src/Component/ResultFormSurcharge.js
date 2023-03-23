import React from "react";
import { Container, Table, Button } from "reactstrap";
function ResultFormSurcharge(props) {
  let { onHandleDelete, listSurcharge } = props;
  return (
    <Container className="table-student">
      <h3>Danh sách phụ phí</h3>
      <Table hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên phụ phí</th>
            <th>Tiền phụ phí</th>
            <th>Tỷ lệ</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {listSurcharge.map((item, index) => {
            let handleDelete = (id) => {
              onHandleDelete(id);
            };

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.surchargeName}</td>
                <td>{item.price}</td>
                <td>{item.select}</td>
                <td>
                  <Button color="warning" onClick={() => handleDelete(item.id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormSurcharge;
