import React, { useState, useEffect } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    address: "",
  };

  const [values, setValues] = useState(initialFieldValues);

  return (
    <>
      <div className="form">
        <form>
          <div className="form__input">
            <div className="ico">
              <i className="fas fa-user"></i>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={values.fullName}
              className="long"
              // onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <div className="form__input">
              <div className="ico">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                value={values.mobile}
                // onChange={handleInputChange}
              />
            </div>
            <div className="form__input">
              <div className="ico">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form__txt">
            <textarea
              name="address"
              placeholder="Address"
              value={values.address}
              // onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form__btn">
            <button
              className="btn"
              type="submit"
              // value={props.currentId == "" ? "Save" : "Update"}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
