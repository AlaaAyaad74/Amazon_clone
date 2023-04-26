import styled from "@emotion/styled";
import React from "react";

function Footer() {
  return (
    <FooterStyle>
      <a href="#" className="top__button">
        Back to top
      </a>
      <div className="main__footer">
        <div className="menu__Links">
          <ul>
            <h2>Get to Know Us</h2>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
          <ul>
            <h2>Shop with Us</h2>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Your Addresses</a>
            </li>
            <li>
              <a href="#">Your Lists</a>
            </li>
          </ul>
          <ul>
            <h2>Make Money with Us</h2>
            <li>
              <a href="#">Protect and build your brand</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Fulfillment by Amazon</a>
            </li>
          </ul>
          <ul>
            <h2>Let Us Help You</h2>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
          </ul>
        </div>
        <span></span>
        <div className="The__end">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
          <p>
            Made by |{" "}
            <a href="https://www.linkedin.com/in/alaa-ayaad-b2a7301b2">
              Alaa_Ayaad
            </a>
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
const FooterStyle = styled.div`
  .top__button {
    display: block;
    text-align: center;
    padding: 1rem 0;
    background-color: #37475a;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .top__button:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
  .main__footer {
    padding-top: 1rem;
    background-color: #232f3e;
  }
  .menu__Links {
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #fff;
    column-gap: 1rem;
    padding: 0rem 1rem;
  }
  .menu__Links h2 {
    font-size: 1.01rem;

    margin: 1rem 0 0.5rem;
  }
  .menu__Links li {
    margin-bottom: 0.5rem;
  }
  .menu__Links a {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 400;
  }
  .menu__Links a:hover {
    text-decoration: 1.5px underline;
  }
  span {
    display: block;
    height: 0.5px;
    background-color: #ddd;
    margin-bottom: 0.5rem;
  }
  .The__end {
    width: 270px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  .The__end img {
    width: 80px;
  }
  .The__end p {
    font-size: 0.95rem;
    color: #fff;
    height: 40px;
  }
  .The__end a {
    color: #f79b34;
    font-weight: 500;
  }
  @media (max-width: 870px) {
    .menu__Links {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 450px) {
    .menu__Links {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 310px) {
    .The__end {
      width: 100%;
      margin: 0;
      justify-content: space-around;
    }
  }
`;
