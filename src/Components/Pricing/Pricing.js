import React from "react";
import "./Pricing.css";
import basic1 from "../../images/homg-img.svg";
import basic from "../../images/homg-img.svg";
import basic2 from "../../images/homg-img.svg";

const Pricing = () => {
  return (
    <>
      <div className="mainCont" id="pricing">
        <div className="pricingContainer">
          <h1
            style={{
              fontFamily: "Rubik, sansSerif",
              fontSize: "30px",
              textAlign: "center",
              color: "var(--black)",
            }}
          >
            Pricing
          </h1>
          <div className="pricing-cards-container">
            <div className="pricing-card">
              <img src={basic} alt="" />
              <div className="strike">
                {/* <h2>1 Session</h2> */}
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>pay just </span>
                  <br />
                  <s> ₹499 </s> ₹299
                  <span style={{ fontSize: "1.5rem" }}> for 1 month</span>
                </h3>
                <br />
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://pages.razorpay.com/pl_LYzxUpMLG0AlCA/view",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="pricing-card">
              <img src={basic1} alt="" />
              <div className="strike">
                {/* <h2>5 Sessions</h2> */}
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>pay just </span>
                  <br />
                  <s> ₹1299 </s> ₹799
                  <span style={{ fontSize: "1.5rem" }}> for 3 months</span>
                </h3>
                <br />
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://pages.razorpay.com/pl_LYzxUpMLG0AlCA/view",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="pricing-card">
              <img src={basic2} alt="" />
              <div className="strike">
                {/* <h2>8 Sessions</h2> */}
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>pay just </span>
                  <br />
                  <s> ₹2199 </s> ₹1499
                  <span style={{ fontSize: "1.5rem" }}> for 6 months</span>
                </h3>
                <br />
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://pages.razorpay.com/pl_LYzxUpMLG0AlCA/view",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="spe-pricingContainer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontFamily: "Rubik, sansSerif",
                fontSize: "30px",
                textAlign: "center",
                color: "var(--black)",
              }}
            >
              SPECIAL DISCOUNT 🤩👇
            </h1>
            <div className="spe-pricing-card">
              <img src={basic2} alt="" />
              <div className="strike">
                <h3 style={{ fontSize: "2.5rem" }}>
                  <span style={{ fontSize: "2rem" }}>pay just </span>
                  <br />
                  <s> ₹2199 </s> ₹1499
                  <span style={{ fontSize: "2rem" }}> for 1 year plan</span>
                  <br />
                  <h4>+</h4>a free t-shirt
                </h3>
                <br />
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://pages.razorpay.com/pl_LYzxUpMLG0AlCA/view",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
