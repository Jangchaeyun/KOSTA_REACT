import { useState } from "react";

export default function MakeAccount() {
  const [account, setAccount] = useState({
    id: "",
    name: "",
    money: "",
    type: "normal",
    grade: "",
  });

  const changeAccount = (e) => {
    let name = e.tatget.name;
    let value = e.target.value;
    setAccount({ ...account, [name]: value });
  };

  const submit = (e) => {
    console.log(account);
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
              <input type="text" name="id" onChange={changeAccount} />
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <input type="text" name="name" onChange={changeAccount} />
            </td>
          </tr>
          <tr>
            <th>입금액</th>
            <td>
              <input type="text" name="money" onChange={changeAccount} />
            </td>
          </tr>
          <tr>
            <th>종류</th>
            <td>
              <input
                type="radio"
                name="type"
                value="normal"
                onChange={changeAccount}
                checked={account.type == "normal"}
              />
              일반
              <input
                type="radio"
                name="type"
                value="special"
                onChange={changeAccount}
              />
              특수
            </td>
          </tr>
          <tr>
            <th>등급</th>
            <td>
              <select
                name="grade"
                id=""
                disabled={account.type == "normal"}
                onChange={changeAccount}
              >
                <option value="">VIP</option>
                <option value="">Gold</option>
                <option value="">Silver</option>
                <option value="">Normal</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="개설" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
