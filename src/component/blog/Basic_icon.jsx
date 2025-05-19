import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Basic_icon = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center">
        <div className="flex text-3xl gap-5 text-gray-700">
          <FaFacebook />
          <FaTwitter />
          <FaInstagramSquare />
          <FaYoutube />
          <FaLinkedin />
          <FaTelegram />
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 text-blue-500">
        <p>© 2021 AaraGroups | All Rights Reserved. Privacy Policy|Blog</p>
      </div>
    </>
  );
};

export default Basic_icon;
