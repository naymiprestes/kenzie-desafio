import styled from "styled-components";

export const Div = styled.div`
  width: 40%;
  height: 55%;

  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;
`;

export const Form = styled.form`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0px 55px;

  h2 {
    font-size: 1.3rem;
    color: #656565;
    margin-bottom: 40px;
  }

  label {
    font-family: "Source Sans Pro";
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    color: #656565;
    margin-bottom: 4px;
  }

  input {
    border: 1px solid #dde6e9;
    border-radius: 4px;
    outline-color: #66afe9;

    box-sizing: border-box;
    width: 240px;
    height: 34px;
    padding-left: 10px;
  }

  button {
    border: 1px solid #3d75bb;
    border-radius: 4px;
    background-color: #3d75bb;
    color: #fff;

    width: 240px;
    height: 36px;

    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 14px;
  }

  button:hover {
    opacity: 80%;
    transition: 5ms;
    cursor: pointer;
  }

  button:focus {
    opacity: 80%;
    transition: 5ms;
    cursor: pointer;
  }

  p {
    color: #e50505;

    font-family: "Source Sans Pro";
    font-size: 11px;
    line-height: 13px;
  }
`;
