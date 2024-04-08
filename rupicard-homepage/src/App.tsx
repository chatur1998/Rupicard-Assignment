import { useState } from "react";
import { handleScroll } from "./utils.tsx";
import ImageWithDesc from "./components/ImageWithDesc/index.tsx";
import "./App.less";
import Features from "./components/Features/index.tsx";

type feature = {
  name: string;
  desc: string;
  greyDesc: string;
};

const features: feature[] = [
  {
    name: "one_percent_cashback",
    desc: "1% assured cashback on your spends.",
    greyDesc: "The more you spend, the more you earn.",
  },
  {
    name: "five_x_rewards",
    desc: "5x more value than your cashback,",
    greyDesc: "only at the Uni Store.",
  },
  {
    name: "forex_globe",
    desc: "Zero Forex Markup.",
    greyDesc: "Go international, without any fees.",
  },
];

function App() {
  // Event listener for scroll event
  window.addEventListener("scroll", handleScroll);

  // Initially check for elements in viewport on page load
  handleScroll();
  return (
    <div className="parent-container">
      <div className="hero-container">
        <video
          muted
          loop
          playsInline
          autoPlay={true}
          className="background-video"
        >
          <source src="/assets/nxt_wave_bg.mp4" type="video/mp4" />
        </video>
        <div className="header-container">
          <img src="/assets/nx_wave_hero.png" className="hero-image" />
          <div>
          <h1 className="header-font">
            <span>
              <strong>NX Wave.</strong>
            </span>{" "}
            The next-gen credit card for those who love rewards.
          </h1>
          <p className="sub-header">1% cashback 5x Rewards Zero Forex Markup</p>
          </div>
        </div>
        <button className="apply-now">Apply now</button>
      </div>
      <div>
        <div className="animated-text-container secondary-text">
          <p className="animated-text">
            Earn 1% assured cashback{" "}
            <span className="grey-text">on your spends. Get</span> 5X
          </p>
          <p className="animated-text">
            more value than cashback{" "}
            <span className="grey-text">at the Uni Store. Enjoy</span>
          </p>
          <p className="animated-text">
            <span className="grey-text">round the clock</span> Whatsapp support.{" "}
            <span className="grey-text">And it's</span>
          </p>
          <p className="animated-text">
            lifetime free;
            <span className="grey-text">
              {" "}
              no joining fee, no annual charges.
            </span>
          </p>
        </div>
      </div>
      <div className="circle" />
      {features.map((feature, index) => (
        <div className="feature-container">
          <ImageWithDesc
            name={feature.name}
            desc={feature.desc}
            greyDesc={feature.greyDesc}
          />
          {!index && (
            <p className="warning">
              Not applicable on fuel purchase, rent & wallet transfers, ATM
              withdrawals & international transactions.
            </p>
          )}
        </div>
      ))}
      <div className="secondary-text mt-40">
        <p>Lifetime free.<br />No joining fee.<br />No annual charges.</p>
      </div>
      <Features />
    </div>
  );
}

export default App;
