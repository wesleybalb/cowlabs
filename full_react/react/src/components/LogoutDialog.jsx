import { useEffect, useRef } from "react";

export default function LogoutDialog({ show, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [show]);

  return (
    <dialog className="login_dialog" ref={dialogRef} onClose={onClose}>
      <p className="fs-5">Poxa, já vai?</p>
      <img src="/src/assets/img/sad_cow.gif" alt="Vaca triste" />
    </dialog>
  );
}
