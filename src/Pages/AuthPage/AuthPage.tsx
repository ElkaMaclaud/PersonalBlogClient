import React from 'react'
import classes from "./style/AuthPage.module.css"
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import { Modal } from '../../components/Modal/Modal';
import { useAppSelector } from '../../store/reduxHooks';

const AuthPage = () => {
    const showModal = useAppSelector((state) => state.page.showModal);
  return (
      <div className={classes.wrapper}>
          <div className={classes.form}>
              <Outlet />
          </div>
          <div className={classes.footer}>
              <Footer />
          </div>
          {showModal && <Modal />}
      </div>
  );
}

export default AuthPage
