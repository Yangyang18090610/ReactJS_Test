import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ButtonAddSurcharge from "../Component/ButtonAddSurcharge";
import ModelAdd from "../Component/ModelAdd";
import ResultFormSurcharge from "../Component/ResultFormSurcharge";

function SurchargeContainer(props) {
  let [showForm, setShowForm] = useState(false);
  let [listSurcharge, setListsurcharge] = useState([]);

  // mở form thêm phụ phí khi ấn Create New Surcharge
  let onHandleShowForm = () => {
    setShowForm(true);
  };
  //   Đóng form thêm
  let onHandleCloseForm = () => {
    setShowForm(false);
  };

  // Lấy dữ liệu từ json server
  const fetchlistSurcharge = async () => {
    const res = await fetch(`http://localhost:5000/data`);
    const data = await res.json();
    console.log("lisst", data);
    return data;
  };
  const getSurcharge = async () => {
    const surchargeFromServer = await fetchlistSurcharge();
    setListsurcharge(surchargeFromServer);
  };
  console.log("abcd", listSurcharge);

  //   tạo phụ phí từ form
  let onHandleCreate = async (surchargeNew) => {
    console.log("new", surchargeNew);
    let res = await fetch(`http://localhost:5000/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(surchargeNew),
    });
    let data = await res.json();
    getSurcharge(...listSurcharge, data);
    setShowForm(false);
  };
  //   xóa
  let onHandleDelete = async (id) => {
    console.log(id);
    await fetch(`http://localhost:5000/data/${id}`, { method: "DELETE" });
    getSurcharge();
  };
  // kHAI BÁO useEffect khi reload trang
  useEffect(() => {
    getSurcharge();
  }, []);

  return (
    <Container>
      <ButtonAddSurcharge onHandleShowForm={onHandleShowForm} />
      <ModelAdd
        showForm={showForm}
        onHandleCloseForm={onHandleCloseForm}
        onHandleCreate={onHandleCreate}
      />
      <ResultFormSurcharge
        listSurcharge={listSurcharge}
        onHandleDelete={onHandleDelete}
      />
    </Container>
  );
}

export default SurchargeContainer;
