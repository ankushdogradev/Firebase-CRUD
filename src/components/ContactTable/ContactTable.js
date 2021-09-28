import React from "react";
import "./ContactTable.scss";

const ContactTable = () => {
  return (
    <>
      <div className="table__cont">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ankush Dogra</td>
              <td>6547893210</td>
              <td>abc@xyz.com</td>
              <td>✔ ❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactTable;
