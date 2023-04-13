import { useState, useEffect } from "react";

const AllAccountInfo = () => {
  const [accs, setAccs] = useState([]);

  useEffect(() => {
    // backend에 데이터 요청하여 전체계좌 목룍을 가져온다.
    let raccs = [
      {
        id: "1001",
        name: "홍길동",
        balance: 10000000,
        type: "normal",
        grade: "",
      },
      {
        id: "1002",
        name: "김길동",
        balance: 20000000,
        type: "special",
        grade: "VIP",
      },
      {
        id: "1003",
        name: "고길동",
        balance: 30000000,
        type: "normal",
        grade: "",
      },
      {
        id: "1004",
        name: "하길동",
        balance: 40000000,
        type: "special",
        grade: "GOLD",
      },
      {
        id: "1005",
        name: "장길동",
        balance: 50000000,
        type: "special",
        grade: "SILVER",
      },
    ];
    setAccs([...raccs]);
  }, []);
  return (
    <>
      <table border="1">
        <tbody>
          <thead>
            <tr>
              <th>계좌번호</th>
              <th>이름</th>
              <th>잔액</th>
              <th>종류</th>
              <th>등급</th>
            </tr>
          </thead>
          {accs.map((acc) => {
            <tr key={acc.id}>
              <td>{acc.id}</td>
              <td>{acc.name}</td>
              <td>{acc.balance}</td>
              <td>{acc.type}</td>
              <td>{acc.grade}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllAccountInfo;
