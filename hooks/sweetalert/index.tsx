import Swal, { SweetAlertResult } from "sweetalert2";
import "./sweetalert.scss";

export const useSweetAlert = () => {
  const Toast = (settings: any = {}): any => {
    return Swal.mixin({
      toast: true,
      position: "top-right",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      ...settings,
    });
  };

  const Confirm = (settings: any = {}): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
      title: "Confirmar",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
      ...settings,
    });
  };

  return { Toast, Swal, Confirm };
};
