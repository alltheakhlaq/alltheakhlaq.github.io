import styled from "styled-components";
import { DARK, GREEN } from "./color";
import { device } from "./device";

//Fonts
export const Fonts = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Allan:wght@400;700&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,200&display=swap");
  text-align: left;
  /* font-weight: 400; */

  @media only screen and (min-width: 701px) {
    & h3 {
      font-family: "Allan", cursive;
      font-size: 60px;
      color: ${DARK};
      margin-top: 30px;
      margin-bottom: 10px;
    }

    & h2 {
      font-family: "Allan", cursive;
      font-size: 40px;
      color: ${DARK};
      margin-top: 10px;
      margin-bottom: 10px;
    }

    & h1 {
      font-family: "Allan", cursive;
      color: ${DARK};
    }

    & p {
      font-family: "IBM Plex Mono", monospace;
      color: ${DARK};
    }

    hr {
      color: ${GREEN};
      border-color: ${GREEN};
    }
  }

  @media only screen and (max-width: 700px) {
    display: block;
    & h3 {
      font-family: "Allan", cursive;
      font-size: 25px;
      color: ${DARK};
      margin-top: 7px;
      margin-bottom: 10px;
    }

    & h2 {
      font-family: "Allan", cursive;
      font-size: 20px;
      color: ${DARK};
      margin-top: 10px;
      margin-bottom: 10px;
    }

    & h1 {
      font-family: "Allan", cursive;
      color: ${DARK};
      margin-top: 5px;
      margin-bottom: 5px;
    }

    & p {
      font-family: "IBM Plex Mono", monospace;
      color: ${DARK};
      font-size: 12px;
    }

    hr {
      color: ${GREEN};
      border-color: ${GREEN};
    }
  }
`;
