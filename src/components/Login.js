import styled from "@emotion/styled";
import React from "react";

function Login() {
  return (
    <LoginStyle>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="logo"
      />
      <form>
        <h2>Sign in</h2>

        <label for="email">Email or Phone number</label>
        <input id="email" />

        <input type="submit" value="Continue" />
        <p>
          By signing in, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice.</a>
        </p>
        <p>
          <a href="#">Need help?</a>
        </p>
      </form>
      <p id="new">
        <span>New to Amazon?</span>
      </p>
      <button className="outer__button">Create your Amazon account</button>
    </LoginStyle>
  );
}

export default Login;
const LoginStyle = styled.div`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  img {
    max-width: 100px;
  }
  form {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 2.2rem;
    margin: 1rem 0;
    width: 330px;
    border-radius: 8px;
  }
  form > * {
    margin-top: 1rem;
    font-weight: 500;
  }
  #email {
    margin-top: 0;
    padding: 3px 7px;

    outline: none;
    border: 1px solid black;
  }

  form label {
    font-size: 0.85rem;
    margin-bottom: 4px;
  }
  form input {
    height: 30px;
    border-radius: 3px;
  }
  form input[type="submit"] {
    background: #f3d078;
    background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border: 1px solid #000;
    cursor: pointer;
  }
  p {
    font-size: 0.7rem;
    width: 330px;
  }
  #new::after {
    content: "";
    height: 1px;
    position: absolute;
    background-color: #6a6a6a;
    width: 100%;
    left: 0;
    z-index: -1;
    top: 50%;
  }
  #new {
    margin: 1.5rem;
    text-align: center;
    position: relative;
  }
  span {
    padding: 4px;
    background-color: #fff;
  }
  .outer__button {
    width: 330px;
    height: 30px;
    margin-bottom: 40px;
  }
  @media (max-width: 370px) {
    max-width: 100%;
    form,
    .outer__button {
      width: 96%;
    }
    p {
      width: auto;
    }
  }
`;
