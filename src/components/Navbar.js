import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { Fonts } from "../assets/css/style";

import { BACKGROUND, DARK, PINK } from "../assets/css/color";
import { useLocation } from "@reach/router";

const Navbar = () => {
  const location = useLocation();
  return (
    <Nav>
      <Section>
        <table>
          <tbody>
            <tr>
              <td>
                <h1>
                  <StyledLink pathname={location.pathname} to="/">
                    Home
                  </StyledLink>
                </h1>
              </td>
              <td>
                <h1>
                  <StyledLink pathname={location.pathname} to="/research">
                    Research
                  </StyledLink>
                </h1>
              </td>
              <td>
                <h1>
                  <StyledLink pathname={location.pathname} to="/design">
                    Design
                  </StyledLink>
                </h1>
              </td>
              <td>
                <h1>
                  <StyledLink pathname={location.pathname} to="/contact">
                    Contact
                  </StyledLink>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </Nav>
  );
};

const Nav = styled.nav`
  padding-top: 20px;
  z-index: 200;
  background-color: ${BACKGROUND};
  position: inherit;
`;

const Section = styled.section`
  background-color: ${BACKGROUND};
  text-align: center;
  @media only screen and (min-width: 701px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }

  table {
    /* display: inline-block; */

    /* max-width: 100%; */
    /* border: 1px solid red; */
    align-items: center;
  }

  td {
    width: 300px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${DARK};

  :hover {
    color: ${PINK};
    text-decoration: ${PINK} underline wavy;
  }

  ${props =>
    props.pathname === props.to
      ? css`
          text-decoration: underline wavy;
          @media only screen and (min-width: 701px) {
            font-size: 40px;
          }

          @media only screen and (max-width: 700px) {
            font-size: 30px;
          }
        `
      : css`
          color: ${DARK};
        `}
`;

export default Navbar;
