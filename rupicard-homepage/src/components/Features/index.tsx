import React from "react";
import "./index.less";

type RenderProp = {
  primaryText: string;
  colorText?: string;
  secondaryText: string;
  src: string;
  index?: number;
};

const MajorFeatures: RenderProp[] = [
  {
    primaryText: "We’ve all heard of instant groceries, now say hello to",
    secondaryText:
      "0% hassle, 100% paperless. Get your <br /> Uni Card instantly.",
    colorText: "instant credit.",
    src: "/assets/app_screen_1.webp",
  },
  {
    primaryText: "With Uni,",
    secondaryText:
      "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app. ",
    colorText: "you're always in control.",
    src: "/assets/app_screen_2.webp",
  },
];
const MinorFeatures = [
  {
    primaryText: "Help, just a WhatsApp away. Anytime, Anyday.",
    secondaryText:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime. ",
    colorText: "",
    src: "/assets/whatsapp_bubble.webp",
  },
  {
    primaryText: "No hidden charges, no last minute surprises.",
    secondaryText:
      "100% money back guarantee if a charge is applied without your knowledge.",
    colorText: "",
    src: "/assets/rupee_bubble.webp",
  },
  {
    primaryText: " Super secure. Because we care about your money.",
    secondaryText: "",
    colorText: "",
    src: "/assets/antivirus_bubble.webp",
  },
];

const Features = () => {
  const RenderMajorFeature = ({
    primaryText,
    secondaryText,
    colorText,
    src,
  }: RenderProp) => {
    return (
      <>
        <div className="major-feature">
          <p className="primary-text">
            {primaryText} <br />{" "}
            <span className="primary-text-color">{colorText}</span>
          </p>
          <p className="secondary-text">{secondaryText}</p>
          <img src={src} className="app-screen" />
        </div>
      </>
    );
  };

  const RenderMinorFeature = ({
    primaryText,
    secondaryText,
    colorText,
    src,
    index,
  }: RenderProp) => {
    return (
      <>
        <div className="minor-feature" style={{ flexDirection: index % 2 !== 0 ? 'row' : 'row-reverse' }}>
            <div className="text-box">
          <p className="primary-text">
            {primaryText} <br />{" "}
            <span className="primary-text-color">{colorText}</span>
          </p>
          <p className="secondary-text">{secondaryText}</p>
          </div>
          <img src={src} className="minor-feature-image" />
        </div>
      </>
    );
  };
  return (
    <div className="features-container">
      <img src={`/assets/circles.png`} className="back-circles" />
      {MajorFeatures.map((feature: RenderProp) => (
        <RenderMajorFeature
          primaryText={feature.primaryText}
          secondaryText={feature.secondaryText}
          src={feature.src}
          colorText={feature.colorText}
        />
      ))}
      {MinorFeatures.map((feature: RenderProp, index: number) => (
        <RenderMinorFeature
          primaryText={feature.primaryText}
          secondaryText={feature.secondaryText}
          src={feature.src}
          colorText={feature.colorText}
          index={index}
        />
      ))}
    </div>
  );
};

export default Features;
