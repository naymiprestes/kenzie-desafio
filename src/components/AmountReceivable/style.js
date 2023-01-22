import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  background: rgba(209, 220, 227, 0.18);
  border-radius: 4px;
  text-align: left;
  font-family: "Source Sans Pro";
  font-style: italic;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    text-transform: uppercase;
    color: #3d75bb;
    border-bottom: #3d75bb solid 1px;

    margin: 80px 50px 20px 30px;
    padding: 4px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    margin: 0px 0px 0px 30px;

    color: #5d9cec;
  }

  p > span {
    font-weight: 600;
  }
`;
