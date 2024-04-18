import React from "react";
import "@styles/footer.css";
const Footer = () => {
  return (
    <div>
      <div className="box">
        <div className="first">
          <ul>
            <li>Be the First to know</li>
            <p>Sign up for updates</p>
          </ul>
          <li style={{ display: "flex" }}>
            <input
              className="large-input"
              type="text"
              placeholder="Enter email"
            />
            <button className="Sub-button">SUBSCRIBE</button>
          </li>
        </div>

        <div
          className="second"
          style={{ paddingLeft: "350px", color: "white" }}
        >
          <ul>
            <h3 style={{ color: "white" }}>Contact Us</h3>

            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
            <h3 style={{ color: "white" }}>Currency</h3>
            <li>
              <img
                style={{ height: "20px",  borderRadius:'20px', }}
                src="https://e1.pngegg.com/pngimages/934/992/png-clipart-world-flag-icons-round-usa-flag-art-thumbnail.png"
              ></img>
                USD
            </li>
            <li style={{fontSize:"10px", fontWeight:"lighter"}}>Transaction will be completed in Euros and a currency reference is available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
