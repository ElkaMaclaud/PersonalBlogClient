import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { FETCH_CONTACT } from "../../store/slice";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./style/ContactPage.module.css"

const ContactPage = () => {
    const contact = useAppSelector((state) => state.page.contact);
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(FETCH_CONTACT());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(!contact) {
        return <Spinner />
    }
    return (
        <div className={classes.wrapperContact}>
            <div  className={classes.contactInfo}><span>Phone:</span><span>{contact?.phone}</span></div>
            <div  className={classes.contactInfo}><span>Website:</span><span>{contact?.website}</span></div>
            <div  className={classes.contactInfo}><span>Social media:</span><span>{contact?.socialMedia}</span></div>
            <div  className={classes.contactInfo}><span>Git:</span><span>{contact?.git}</span></div>
            <div  className={classes.contactInfo}><span>Address:</span><span>{contact?.adress}</span></div>
        </div>
    );
};

export default ContactPage;
