import React from "react";
import "./headerImage.css";

function HeaderImage() {
  return (
    <div className="headerImage">
      <div className="squares-wrapper">
        <div className="squares square1"></div>
        <div className="squares square2"></div>
        <div className="description-wrapper">
          <h3>Շառլ Ազնավուր</h3>
          <p>
            Իր երաժշտական կարիերայի ընթացքում նա ձայնագրել է մոտ 1200 երգ տարբեր
            լեզուներով՝ ֆրանսերեն, անգլերեն, իտալերեն, իսպաներեն, գերմաներեն,
            հայերեն, ռուսերեն, նեապոլիտաներեն։
          </p>
        </div>
        <div className="event-description">
          <h2>ՀԻՇԱՏԱԿԻ ՕՐ ՀՈԿՏԵՄԲԵՐ 3</h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
