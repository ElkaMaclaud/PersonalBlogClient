import React, { useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "./style/Modal.module.css";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { SET_SHOWMODAL } from "../../store/slice";

export const Modal = () => {
  const { message, success } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector("#react_modal");

  useLayoutEffect(() => {
    setTimeout(() => dispatch(SET_SHOWMODAL(false)), 900);
  }, [dispatch]);

  if (!node) return null;
  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      ref={ref}
      style={{ color: success ? "green" : "red" }}
    >
      {message}
    </div>,
    node
  );
};
