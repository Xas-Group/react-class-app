import styled from "styled-components";

function AppButton({ buttonText, className, buttonClickFun = () => {} }) {
  return (
    <AppButtonStyle onClick={buttonClickFun} className={` btn ${className} `}>
      {buttonText}
    </AppButtonStyle>
  );
}

export default AppButton;

const AppButtonStyle = styled.div`
  margin-top: 10px;
  margin-right: 5px;
`;
