import Swal from "sweetalert2";

const SweetAlert2Basic = () => {
  const showAlert = () => {
    Swal.fire("계좌가 개설되었습니다.").then((result) => {
      alert("result:" + result.value);
    });
  };
  return <button onClick={showAlert}>클릭</button>;
};

export default SweetAlert2Basic;
