import React from "react";
import "./footerSection.css";
import fbIcon from "../../images/footer-section/facebook-icon.svg";
import instaIcon from "../../images/footer-section/insta-icon.svg";
import youtubeIcon from "../../images/footer-section/youtube-icon.svg";

function FooterSection() {
  return (
    <div className="footerSection">
      <div className="subscribe-email-section">
        <p className="someText">
          Ձեր հարցերը, մտահոգությունները կամ առաջարկությունները կարող եք
          ուղարկել hayasrtist@mail.ru էլեկտրոնային հասցեին, ինչպես նաև մեր
          ֆեյսբուքյան էջի հետադարձ կապին:
        </p>
        <div>
          <input
            className="subscribe-email"
            type="email"
            id="subscribe-email"
            name="subscribe-email"
            placeholder="Էլ․ փոստ"
          />
          <button>Բաժանորդագրվել</button>
        </div>
      </div>
      <div className="icons-section">
        <a href="/" className="icon">
          <img src={fbIcon} alt="fb" />
        </a>
        <a href="/" className="icon">
          <img src={instaIcon} alt="insta" />
        </a>
        <a href="/" className="icon youtube-icon">
          <img src={youtubeIcon} alt="youtube" />
        </a>
      </div>
      <div className="footer-line"></div>
      <div className="footer-copyright">
        <p>Copyright © HAYARTIST, 2012-2021</p>
        <p>
          Կայքից մասնակի կամ ամբողջական մեջբերումներ կատարելիս արտաքին հղումը
          hayartist.am-ին պարտադիր է (ԱՂԲՅՈՒՐԸ` hayartist.am կամ HayArtist):{" "}
          <br />
          Կայքից վերցված լուսանկարները հրապարակել առանց որևէ փոփոխման
          (անթույլատրելի է նոր լոգոտիպի ավելացումը): <br /> Խախտում թույլ տված
          անձինք կենթարկվեն պատասխանատվության օրենքով սահմանված կարգով։
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
