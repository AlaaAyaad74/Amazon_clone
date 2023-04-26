import styled from "@emotion/styled";
import React from "react";
import Product from "./product";

function Home() {
  return (
    <HomeStyle>
      <img
        className="image__home"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Cover"
      />
      <div className="home__row">
        <Product
          id={1}
          title={
            "Fugiat anim officia sit reprehenderit velit ex. Sit ad officia culpa ullamco reprehenderit voluptate incididunt ullamco reprehenderit."
          }
          img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200.jpg"
          rating={3}
          price={25}
        />{" "}
        <Product
          id={2}
          title={
            "Ut non ipsum minim excepteur Lorem officia voluptate. Ex mollit exercitation dolore est dolor nisi. "
          }
          img="https://m.media-amazon.com/images/I/613E8Kq+60L._AC_SX679_.jpg "
          rating={4}
          price={79}
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          id={3}
          title={
            "Ut non ipsum minim excepteur Lorem officia voluptate. Ex mollit exercitation dolore est dolor nisi.  "
          }
          img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={5}
          price={19.9}
        />{" "}
        <Product
          id={4}
          title={
            "Ut non ipsum minim excepteur Lorem officia voluptate. Ex mollit exercitation dolore est dolor nisi. "
          }
          img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
          rating={3}
          price={105.9}
        />{" "}
        <Product
          id={5}
          title={
            "Ut non ipsum minim excepteur Lorem officia voluptate. Ex mollit exercitation dolore est dolor nisi."
          }
          img="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg"
          rating={5}
          price={119.5}
        />
      </div>
      <div className="special__div">
        <div className="inner__div">
          <h3>See personalized recommendations</h3>
          <button>Sign in</button>
          <p>
            New customer? <a href="#">Start here.</a>
          </p>
        </div>
      </div>
    </HomeStyle>
  );
}

export default Home;
const HomeStyle = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(234, 237, 237);
  .home__row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
  }
  .image__home {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -150px;
  }
  .special__div {
    background-color: #fff;
    padding: 30px;
  }
  .inner__div {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px;
    text-align: center;
  }
  .inner__div h3 {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .inner__div button {
    width: 220px;
    height: 25px;
    background: #f3d078;
    background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border: 1px solid #000;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    margin: 8px 0;
  }
  .inner__div p {
    font-size: 0.7rem;
  }
  @media (max-width: 994px) {
    .home__row {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 600px) {
    .image__home {
      margin-bottom: -100px;
    }
  }
`;
