import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactTable from "../ContactTable/ContactTable";
import "./Contact.scss";

const Contacts = () => {
  return (
    <>
      <div className="cont">
        <div className="cont__head">
          <h1>Contact Register</h1>
        </div>
        <div className="cont__contact">
          <ContactForm />
          <ContactTable />
        </div>
      </div>
    </>
  );
};

export default Contacts;
