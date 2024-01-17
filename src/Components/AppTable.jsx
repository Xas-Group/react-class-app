import styled from "styled-components";

function AppTable({ title = "", list = [] }) {
  return (
    <AppTableStyle>
      <h4>{title}</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>NIC</th>
          </tr>
        </thead>
        <tbody>
          {list.length == 0 ? (
            <tr>
              <td colSpan={3}>Data Not Found</td>
            </tr>
          ) : (
            list.map((row) => (
              <tr>
                <td>{row.accountNumber}</td>
                <td>{row.name}</td>
                <td>{row.nic}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>Total Data : {list.length}</div>
    </AppTableStyle>
  );
}

export default AppTable;

const AppTableStyle = styled.div``;
