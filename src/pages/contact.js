import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { SEO } from "../components/seo";
import { device } from "../assets/css/device";

import { BROWN, BLACK, PINK } from "../assets/css/color";

const contact = () => {
  return (
    <Layout>
      <CONTACT>
        <h2>I'm happy to talk more with you!</h2>
        <hr></hr>
        <p>
          I offer a wide variety of interests such as academic research on
          different aspects of application of intersectional feminism principles
          to digital humanities topics, webdesign, graphic design and front-end
          web development.
        </p>
        <p>
          If you feel we could work together or if you need any kind of support
          I can offer, please feel free to get in touch!
        </p>
        <b>
          <p>Email: saara.akhlaq@gmail.com</p>
        </b>
        <b>
          <p>
            Twitter:{" "}
            <a href="https://twitter.com/alltheakhlaq">@alltheakhlaq</a>
          </p>
        </b>
        <p>
          Especially, if you are a woman of color, I am particularly keen to
          support you in whatever way I can so don't hesitate contacting me!
        </p>
      </CONTACT>
    </Layout>
  );
};

const CONTACT = styled.section`
  /* background-color: ${BROWN};
  padding: 80px; */

  & p {
    background: ${BLACK};
  }

  @media only screen and (min-width: 701px) {
    /* padding-left: 100px;
    padding-right: 100px; */
    padding-top: 30px;
    margin-left: 100px;
    margin-right: 400px;
  }
  @media only screen and (max-width: 700px) {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default contact;

export const Head = () => <SEO title="Contact | Sara Akhlaq" />;
