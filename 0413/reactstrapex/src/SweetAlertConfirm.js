import { Button } from "reactstrap";
import Swal from "sweetalert2";

const SweetAlertConfirm = () => {
  const deleteAlert = () => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B088A",
      cancelButtonColor: "#01DF01",
      confirmButtonText: "예",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.value) {
        document.getElementById("delteId").remove();
        Swal.fire("Deleted", "sweetalert2 삭제완료", "success");
      }
    });
  };
  return (
    <>
      <h1>SweetAlertConfirm</h1>
      <Button color="primary" onClick={deleteAlert}>
        삭제
      </Button>
    </>
  );
};

export default SweetAlertConfirm;
