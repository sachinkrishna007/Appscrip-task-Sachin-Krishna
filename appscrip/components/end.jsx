import React from "react";
import "@styles/end.css";

const End = () => {
  return (
    <div className="footer">
      <div>
        <ul className="columns">
          <h3 >metta muse</h3>
          <li>About us</li>
          <li>stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>Eu Compliance Docs</li>
        </ul>
      </div>
      <div>
        <ul className="columns">
          <h3>Quick Links</h3>
          <li>Orders and Shipping</li>
          <li>Join/Login as Seller</li>
          <li>Paymebt & Pricing</li>
          <li>Return & Refunds</li>
          <li>Faqs</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <ul className="columns">
          <h3>Follow us</h3>

          <li>
            <img
              style={{ height: "40px" }}
              src="https://i.pinimg.com/564x/f3/08/c6/f308c6e060122209c716705f48c0f181.jpg"
            />
            <img
              style={{ height: "40px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2UL2eovAApmNSLfZi2_iMd-yYqOUV_xifRnmENuBrw&s"
              alt="Instagram"
            />
          </li>
          <li>
            <h3>metta mussa ACCEPTS</h3>
            <img
              style={{ height: "90px" }}
              src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png"
              alt=""
            />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default End;
