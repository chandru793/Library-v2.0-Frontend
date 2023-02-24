import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//copied to clipboard
export function copiedToClipBoard() {
  toast.success("Copied to Clipboard", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}

//username and password wrong
export function authFailed() {
  toast.warn("Check your username and password", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}
