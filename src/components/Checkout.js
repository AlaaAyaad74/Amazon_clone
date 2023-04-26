import React from "react";
import { UseStateValue } from "../Stateprovider";
import styled from "@emotion/styled";
function About({ id, img, rating, title, price }) {
  const [{ basket }, dispatch] = UseStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: id,
      img: img,
      rating: rating,
      title: title,
      price: price,
        
        
        
       
    });
  };
  console.log(basket.length > 0 ? basket[0].id : "");
  return (
    <CheckOutStyle>
      <div className="checkOut">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="cover"
        />
        {basket.length > 0 ? (
          <div style={{ maxWidth: "1150px" }}>
            <h1 className="found">YOUR SHOPPING CART</h1>
            {basket.map((item, index) => (
              <div key={index} className="product">
                <img src={item.img} alt="Product Image" />
                <div className="product__info">
                  <h5>{item.title}</h5>
                  <h5>
                    <small>$</small> {item.price}
                  </h5>
                  <p className="rate">
                    {Array(item.rating)
                      .fill()
                      .map((_) => (
                        <p>🌟</p>
                      ))}
                  </p>
                  {/* <button onClick={removeFromBasket}>Remove from basket</button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>YOUR CART IS EMPTY</h1>
        )}
      </div>
    </CheckOutStyle>
  );
}

export default About;
const CheckOutStyle = styled.div`
  background-color: #fff;
  .checkOut img {
    width: 100%;
    object-fit: cover;
  }

  .product {
    display: flex;
    width: 80%;
    margin: 2em auto;
  }
  .product img {
    width: 100px;
  }
  .product__info {
    margin: 0 2em;
  }
  .rate {
    display: flex;
  }
  button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    width: fit-content;
    padding: 0.2em 0.4em;
    margin-top: 0.8em;
  }
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
  .found {
    text-align: start;
    margin: 0 1em;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.25em 0;
    border-bottom: 1px solid black;
  }
`;
