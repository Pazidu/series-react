import React from "react";
import './ContactUs.css'
import Navigation from "../../components/Navigation/Navigation";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function ContactUs() {
  return (
    <div className="contactusPage">
      <Navigation
        title="Login"
        profilePic="./images/profile.webp"
        path="/Login"
      />

      <p id="contactUsTitle">Contact Us</p>
      <div id="contactUs">
        <div className="social">
          <p className="followText">Follow series on social</p>
          <div className="socialMediaLogos">
            <a href="https://web.facebook.com/">
              <img src="./images/fb.png" className="logo" />
            </a>
            <a href="https://web.instagram.com/">
              <img src="./images/insta.webp" className="logo" />
            </a>
            <a href="https://web.x.com/">
              <img src="./images/x.png" className="logo" />
            </a>
            <a href="https://web.linkdin.com/">
              <img src="./images/linkdin.png" className="logo" />
            </a>
            <a href="https://web.tiktok.com/">
              <img src="./images/tiktok.png" className="logo" />
            </a>
          </div>
        </div>
        <div className="contactDetails">
          <p>
            <FaPhone /> 0702002795
            <br />
            <MdAttachEmail />
            <a href="https://www.gmail.com" className="map">
              {" "}
              pasidubhagya20@gmail.com
            </a>
            <br />
            <IoLocation />
            <a href="https://maps.app.goo.gl/KNAUszFX9ptHjRcg9" className="map">
              {" "}
              Map
            </a>
          </p>
        </div>
      </div>
      <div className="qr">
        <div className="qrText">
          <p className="getAppText">Get the series app</p>
          <p className="androidIos">For Android and iOS</p>
        </div>
        <div className="qrImage">
          <img src="./images/qr.png" width={"200px"} height={"200px"} />
        </div>
      </div>
      <p className="authentication">© 2024 by series.com, Inc.</p>
    </div>
  );
}
