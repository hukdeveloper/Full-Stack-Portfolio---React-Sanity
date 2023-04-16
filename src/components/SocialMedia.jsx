import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/haris-umar-76a21b1b5/"
        target="__blank"
      >
        <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/harisdeveloper10101?mibextid=ZbWKwL"
        target="__blank"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://instagram.com/hukdeveloper?igshid=ZDdkNTZiNTM="
        target="__blank"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/hukdeveloper" target="__blank">
        <AiFillGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
