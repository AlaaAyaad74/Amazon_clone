import styled from "@emotion/styled";
import React from "react";
import { UseStateValue } from "../Stateprovider";
function product({ id, img, rating, title, price }) {
  const [{ basket }, dispatch] = UseStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        rating: rating,
        title: title,
        price: price,
      },
    });
  };
  return (
    <ProductStyle>
      <div className="product__Info">
        <p>{title}</p>
        <p className="product__Pricing">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__Rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={img} alt="product" />
      <button onClick={addToBasket}>Add to basket</button>
    </ProductStyle>
  );
}

export default product;
const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-self: center;
  align-items: center;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  margin: 20px;
  padding: 20px;
  z-index: 1;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .product__Pricing {
    margin-top: 5px;
  }
  .product__Info {
    height: 100px;
    width: 100%;
    margin-bottom: 15px;
    text-align: left;
  }

  .product__Rating {
    display: flex;
  }
  button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    width: fit-content;
    padding: 0.2em 0.4em;
  }
  small {
    margin-inline-end: 4px;
  }
  @media (max-width: 994px) {
    max-width: 500px;
   
  }
`;
