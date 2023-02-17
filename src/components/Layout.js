import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Fonts } from "../assets/css/style";
import { createGlobalStyle } from "styled-components";
import { BACKGROUND } from "../assets/css/color";
import "../assets/css/design.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${BACKGROUND};
  }
`;

//Layout style defined
export const MainLayout = styled.div`
  height: 100%;
  max-width: 100%;
  /* This was needed at some point but probably not any more */
  /* position: absolute;
  top: 0;
  left: 0; */
`;

const Layout = ({ children }) => {
  return (
    <MainLayout>
      <Fonts>
        <GlobalStyle />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </Fonts>
    </MainLayout>
  );
};

export default Layout;
