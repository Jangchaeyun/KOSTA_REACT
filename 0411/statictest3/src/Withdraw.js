import { useState } from "react";

const Withdraw = () => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [withdraw, setWithdraw] = useState({ id: "", money: "" });

  const changeWithdraw = (e) => {
    setWithdraw({ ...withdraw, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    setMessage(`출금 성공 (잔액: ${100000 - withdraw.money})`);
    setModal(true);
    e.preventDefault();
  };

  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <th>계좌번호</th>
            <td>
              <input type="text" name="id" onChange={changeWithdraw} />
            </td>
          </tr>
          <tr>
            <th>출금액</th>
            <td>
              <input type="text" name="money" onChange={changeWithdraw} />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="출금" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
      {modal && <div>{message}</div>}
    </>
  );
};

export default Withdraw;
