import { useState } from "react";

const AccountInfo = () => {
  const [account, setAccount] = useState({
    id: "",
    name: "",
    money: "",
    type: "",
    grade: "",
  });

  const changeId = (e) => {
    setAccount({ ...account, id: e.target.value });
  };

  const submit = (e) => {
    let acc = {
      id: "1001",
      name: "hong",
      money: "100000",
      type: "special",
      grade: "VIP",
    };
    setAccount({ ...acc });
    e.preventDefault();
  };
  return (
    <>
      <h3>계좌개설</h3>
      <table border="1">
        <tbody>
          <tr>
            <th>계좌번호</th>
            <td>
              <input type="text" name="id" onChange={changeId} />
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <label>{account.name}</label>
            </td>
          </tr>
          <tr>
            <th>입금액</th>
            <td>
              <label>{account.money}</label>
            </td>
          </tr>
          <tr>
            <th>종류</th>
            <td>
              <label>{account.type}</label>
            </td>
          </tr>
          <tr>
            <th>등급</th>
            <td>
              <label>{account.grade}</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="조회" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AccountInfo;
