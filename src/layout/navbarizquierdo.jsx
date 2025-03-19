import React from "react";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const NavbarIzquierdo = () => {
  return (
    <div className="fixed left-0 top-1/4 flex items-center">
      {/* Lista de íconos */}
      <ul className="flex flex-col p-0 m-0">
        <li className="mb-4">
          <CgMail style={{ fontSize: "40px" }} className="m-1" />
        </li>
        <li className="mb-4">
          <FaLinkedin style={{ fontSize: "40px" }} className="m-1" />
        </li>
        <li className="mb-4">
          <FaSquareGithub style={{ fontSize: "40px" }} className="m-1" />
        </li>
        <li className="mb-4">
          <FaFacebookF style={{ fontSize: "40px" }} className="m-1" />
        </li>
      </ul>
    </div>
  );
};

export default NavbarIzquierdo;
