import { useState } from "react";

const Deposit = () => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [deposit, setDeposit] = useState({ id: "", money: "" });

  const changeDeposit = (e) => {
    setDeposit({ ...deposit, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    setMessage(`입금 성공 (잔액: ${100000 + +deposit.money})`);
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
              <input type="text" name="id" onChange={changeDeposit} />
            </td>
          </tr>
          <tr>
            <th>입금액</th>
            <td>
              <input type="text" name="money" onChange={changeDeposit} />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="입금" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
      {modal && <div>{message}</div>}
    </>
  );
};

export default Deposit;
