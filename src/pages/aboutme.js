import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { SEO } from "../components/seo";
import ME from "../assets/images/me.jpg";

const aboutme = () => {
  return (
    <Layout>
      <ABOUT>
        <h2>More About me</h2>
        <hr></hr>
        <img height={395} src={ME} alt="" />
        <p>
          Hey! I'm Sara Akhlaq. I am a researcher and a museum practitioner.
          With my research I have always tried to engage in academic activism
          (although lately I have been having a hard time accepting the validity
          of this term). I have also always employed my web and graphic design
          skills in my academic work, as an attempt to challenge power through
          alternative representations of museum collections.
        </p>
        <p>
          I did masters in&nbsp;
          <a href="https://www.b-tu.de/en/heritageconservation-ma">
            Heritage Conservation and Site Management
          </a>
          &nbsp;at BTU Cottbus-Senftenberg. During my masters and my masters
          thesis, I focused on eithcal dimensions of digital preservation of
          cultural heritage. From then onwards, I have focused on colonial,
          racial and gendered biases that get emtombed into digital collections
          when they go unaddressed in the process of digitsation. With my
          research I want to employ data visusalisation as a way of addressing
          these biases and challenge the power differentials in these digital
          GLAM collections.
        </p>
        <p>
          Currently, I am working as a PhD student in&nbsp;
          <a href="https://liu.se/en/organisation/liu/itn/mit">
            Media and Information Technology division of Linköping University
          </a>
          &nbsp;in Sweden. With my PhD, my goal is to continue working on
          addressing biases in digital GLAM collections through data
          visualisation. Moreover, I am also working on exploring the notion of
          hidden labour in context of open source software and its visualisation
          in an exhibition space.
        </p>
        <p>
          In the past I have worked at&nbsp;
          <a href="https://uclab.fh-potsdam.de/">
            Urban Complexity Lab at Fachhochschule Potsdam
          </a>
          . I acted as a research associate for the project&nbsp;
          <a href="https://uclab-potsdam.github.io/kollisionen/">Kollisionen</a>
          . With Kollisionen, we made a multimodal data representation platform
          that included data visualisation, data sonification and 3D/VR
          visualisation. I contributed towards web design, web development of
          data visualisaiton module of Kollisionen along with assisting with
          initial data sorting and massaging of the digital GLAM collection upon
          which the multimodal platform was built.
        </p>
        <p>
          If you want to get in touch with me to know more about my research
          please send me an email at saara.akhlaq@gmail.com or send me a dm on
          Twitter&nbsp;
          <a href="https://twitter.com/alltheakhlaq">@alltheakhlaq</a>.
        </p>
      </ABOUT>
    </Layout>
  );
};

const ABOUT = styled.section`
  @media only screen and (min-width: 701px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media only screen and (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default aboutme;

export const Head = () => <SEO title="About me | Sara Akhlaq" />;
