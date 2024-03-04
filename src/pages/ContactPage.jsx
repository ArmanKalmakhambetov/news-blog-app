import React from "react";
import emailLogo from "../assets/img/email.png";
import phoneLogo from "../assets/img/phone.png";
import faxLogo from "../assets/img/fax.png";
import adressLogo from "../assets/img/address.png";
import timeLogo from "../assets/img/time.png";


export default function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__left">
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110654.39649850556!2d76.8903371593278!3d43.21415243132807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ec668382dab%3A0x36e05a6f76e09fcd!2sKazakhstan%20Newsline!5e0!3m2!1sru!2skz!4v1709536987260!5m2!1sru!2skz"
            allowfullscreen=""
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact__right">
        <div className="contact__title">Mega news information</div>
        <div className="contact__info">
          <div className="contact__line"></div>
          <div className="contact__info-box">
            <div className="contact__info-item">
              <img src={emailLogo} alt="email logo" />
              email : Management@mega.news
            </div>
            <div className="contact__info-item">
              <img src={phoneLogo} alt="phoneLogo logo" />
              Phone number : +1(234) 567-8910
            </div>
            <div className="contact__info-item">
              <img src={faxLogo} alt="faxLogo logo" />
              fax : +1(234) 567-8910
            </div>
            <div className="contact__info-item">
              <img src={adressLogo} alt="adressLogo logo" />
              Address : 1234 Foxrun St.New Lenox, IL 123456
            </div>
          </div>
        </div>
        <div className="contact__time-info">
          <img src={timeLogo} alt="timeLOgo logo" />
          Responding 24 hours a day, 7 days a week
        </div>
      </div>
    </div>
  );
}
