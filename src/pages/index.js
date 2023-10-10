import React from "react";
import Layout from "../components/Layout";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { SEO } from "../components/seo";
import { BACKGROUND, DARK, PINK, GREEN } from "../assets/css/color";
import { useLocation } from "@reach/router";
import RecentActivities from "../components/RecentActivities";
import { device } from "../assets/css/device";

const Index = () => {
  const location = useLocation();
  return (
    <Layout>
      <INTRO>
        <h3>
          Hey! I’m &nbsp;&nbsp;
          <NAME id="props-basic" className="name-hover">
            Sara Akhlaq
          </NAME>
          .
        </h3>
        <h2>
          I grew up in Pakistan. I have been living in Germany for past couple
          of years.<br></br>I am a &nbsp;&nbsp;
          <StyledLink pathname={location.pathname} to="/research">
            researcher
          </StyledLink>
          &nbsp;&nbsp; and a&nbsp;{" "}
          <StyledLink pathname={location.pathname} to="/design">
            designer
          </StyledLink>
          .<br></br>
        </h2>
        <hr></hr>
        <p>
          I'm currently working at Museum für Naturkunde Berlin on the project 'Virtual access to fossil and archival material from the German Tendaguru Expedition (1909-1913)'. Along with that I am  pursuing a PhD at the Chair of Humanities Data Science and Methodology at TU Darmstadt. My research lies at the intersection of critical digital cultural heritage and data
          visualisation. I’ve been trying to address biases in museum collection data by inspecting it through an intersectional feminist and anti-colonial
          lens.
        </p>{" "}
        <p>
          <a href="/aboutme">more about me</a>
        </p>
        <hr></hr>
        <RecentActivities />
      </INTRO>
      <StyledTooltip
        anchorId="props-basic"
        content="(prounced saa-ra akh-laaq)"
        place="right"
      />
    </Layout>
  );
};

const INTRO = styled.section`
  background-color: ${BACKGROUND};

  @media only screen and (min-width: 701px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media only screen and (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledTooltip = styled(Tooltip)`
  margin-left: 8px;
  color: ${PINK};
`;

const NAME = styled.span`
  text-decoration: ${DARK} underline dotted;
  /* display: flex; */

  :hover {
    color: ${PINK};
    text-decoration: ${PINK} underline dotted;
  }
`;

const StyledLink = styled(Link)`
  color: ${DARK};

  :hover {
    color: ${PINK};
    text-decoration: ${PINK} underline wavy;
  }

  ${props =>
    props.pathname === props.to
      ? css`
          font-size: 40px;
          text-decoration: underline wavy;
        `
      : css`
          color: ${DARK};
        `}
`;
export default Index;

export const Head = () => <SEO title="Homepage | Sara Akhlaq" />;
