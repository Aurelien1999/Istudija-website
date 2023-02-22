import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { Trans, useTranslation} from 'react-i18next';
import './footerCompGarden.css'
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function FooterCompGarden() {
    const form = useRef();
    const namef = useRef(null);
    const emailf = useRef(null);
    const phonef = useRef(null);
    const messagef = useRef(null);
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_tk7sspg', 'template_okmg00l', form.current, 'pzC9Cmrm5HNNhJSJE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      namef.current.value = "";
      emailf.current.value = "";
      phonef.current.value = "";
      messagef.current.value = "";
    };
    return (
            <div className="contactviewgar">
              <div className="divfright">
                <p className="contactusfooter">Contact us</p>
              <form className="formright" ref={form} onSubmit={sendEmail}>
                  <label className="labeltext">Name *</label>
                  <input className="inputcontact" ref={namef} type="text" placeholder="Vards, uzvards" name="user_name"  required/> 
                  <label className="labeltext">Your email *</label>
                  <input className="inputcontact" ref={emailf} type="email" placeholder="ex: tavs.email@mail.lv" name="user_email" required />
                  <label className="labeltext">Your phone</label>
                  <input className="inputcontact" ref={phonef} type="phone" placeholder="ex: +371 00 000 000" name="user_phone" />
                  <label className="labeltext">Message *</label>
                  <textarea className="inputmessage" ref={messagef} type="message" placeholder="Tava ziņa..." name="message" required/>
                  <input className="buttonsend" onClick={()=>{ alert('Email send to Santa !'); }} type="submit" value="Send"/>
              </form>
              </div>
              <div className="divfleft">
                <Link className="linkftoint" style = {{textDecoration:"none"}} to="../interior">
                  <p className="footerpabove"><Trans i18nKey="description.linkfootint"></Trans></p>
                </Link>
                <p className="footerpabove"><Trans i18nKey="description.footinter"></Trans></p>
                <p className="santapfooter">Ivars Stirna</p>
                <p className="reqp">SIA I Studija</p>
                <p className="reqp">Reģistrācijas nr.: LV40003653293</p>
                <p className="reqp">Juridiskā adrese: Marsa Gatve 2-54, Rīga, LV -1082</p>
                <p className="reqp">Banka: Swedbank AS</p>
                <p className="reqp">Bankas kods: HABA LV22</p>
                <p className="reqp">Konta nr.: LV 16 HABA 0551014430225</p>
                <div className="diviconfooter">
                  <FaEnvelope color="wheat"/>
                  <p className="iconpfooter">stirnaivars@gmail.com</p>
                </div>
                <div className="diviconfooter">
                  <FaPhone color="green"/>
                  <a className="iconpfooter" href="tel:+371 26 551 998">+371 26 551 998</a>
                </div>
              </div>
            </div>
        );
}