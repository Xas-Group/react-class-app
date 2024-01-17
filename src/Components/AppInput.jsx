import styled from "styled-components";

function AppInput({
  labelText = "",
  inputType = "text",
  value = () => {},
  setValue = () => {},
}) {
  return (
    <AppInputStyle className="form-group">
      <label>{labelText}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        type={inputType}
      />
    </AppInputStyle>
  );
}

export default AppInput;

const AppInputStyle = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
