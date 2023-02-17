import styled from "styled-components";
import { DARK, GREEN } from "./color";

//Fonts
export const Fonts = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Allan:wght@400;700&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,200&display=swap");
  text-align: left;
  /* font-weight: 400; */

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
`;
