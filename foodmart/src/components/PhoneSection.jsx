import React from "react";
import phone from "../assets/phone.png";
import google from "../assets/google-play.jpg";
import appstore from "../assets/app-store.jpg";

export default function PhoneSection() {
  return (
    <section className="phone">
      <div className="phone-sec">
        <img src={phone} alt="phone" />
        <div className="text">
          <h1>Shop faster with foodmart App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
          <img src={google} alt="Google Play" />
          <img src={appstore} alt="App Store" />
        </div>
      </div>
    </section>
  );
}
