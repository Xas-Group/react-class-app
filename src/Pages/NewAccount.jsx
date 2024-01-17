import styled from "styled-components";
import App from "../App";
import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";
import AppTable from "../Components/AppTable";
import { useState } from "react";

function NewAccount() {
  const [accountNumber, setAccountNumber] = useState("");
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");

  const [accountList, setAccountList] = useState([]);

  const handleRegisterNewAccount = () => {
    setAccountList([...accountList, { accountNumber, name, nic }]);
    alert("Data Inserted Successfully");
  };

  return (
    <App>
      <NewAccountStyle>
        <h1>New Account</h1>

        <div className="row">
          <div className="col">
            <div className="form-container">
              <AppInput
                labelText="Account ID :"
                value={accountNumber}
                setValue={setAccountNumber}
                inputType="text"
              />
              <AppInput
                labelText="Name :"
                value={name}
                setValue={setName}
                inputType="text"
              />
              <AppInput
                labelText="NIC :"
                value={nic}
                setValue={setNic}
                inputType="text"
              />
              <AppButton
                buttonText={"Register"}
                buttonClickFun={handleRegisterNewAccount}
                className={"btn-primary"}
              />
              <AppButton buttonText={"Update"} className={"btn-warning"} />
              <AppButton buttonText={"Delete"} className={"btn-danger"} />
            </div>
          </div>
          <div className="col">
            <AppTable title="My Account Detail" list={accountList} />
          </div>
        </div>
      </NewAccountStyle>
    </App>
  );
}

export default NewAccount;

const NewAccountStyle = styled.div`
  /* width: 500px; */
`;
