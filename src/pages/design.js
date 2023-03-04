import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import { BACKGROUND, GREEN } from "../assets/css/color";
import { SEO } from "../components/seo";

import GD1 from "../assets/images/card1.jpg";
import GD2 from "../assets/images/card2.jpg";
import GD3 from "../assets/images/card3.jpg";
import GD4 from "../assets/images/card4.jpg";
import GD5 from "../assets/images/card5.jpg";
import GD6 from "../assets/images/card6.png";
import GD7 from "../assets/images/card7.png";
import GD8 from "../assets/images/card8.png";
import GD9 from "../assets/images/card9.jpg";
import GD10 from "../assets/images/card10.jpg";
import GD11 from "../assets/images/card11.jpg";
import GD12 from "../assets/images/card12.jpg";

const Design = () => {
  return (
    <Layout>
      <DESIGN>
        <ReactFullpage
          //fullpage options
          navigation /* adds navigation circles*/
          controlArrowsHTML={[
            '<div class="fp-arrow"></div>',
            '<div class="fp-arrow"></div>',
          ]}
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000} /* Options here */
          scrollHorizontally={true} /* Because we are using the extension */
          sectionsColor={[BACKGROUND, "#AD9BAA", "#C2847A", GREEN]}
          scrollHorizontallyKey={"YOUR KEY HERE"}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div class="slide">
                    <h2>Design Skills</h2>{" "}
                    <p>
                      I am experienced in web design and development, Graphic
                      Design, and 3D modeling and visualisation of cultural
                      heritage in XR.
                    </p>
                    <hr></hr>
                    <h1>
                      Scroll down to see some of the web design, graphic design
                      and 3D visualisation work I've done over the years
                    </h1>
                    <hr></hr>
                    <h1>Overview</h1>{" "}
                    <p>
                      I have acquired different design skills becasue of my
                      personal interest in creating aesthetically appealing
                      things and also because of different professional settings
                      I have engaged with. I started with trying out different
                      graphic design software in my late teen year. This hobby
                      lead to employing it to in my professional life in order
                      to present my work through a design lead approach. This
                      interest in graphic design expanded to include web design,
                      web developement, 3D modeling and visualisation of
                      cultural heritage objects, and more recently data
                      visualisation.
                    </p>
                    <p>
                      I'm unable to show a lot of related work I've done because
                      of copyright restrictions.
                    </p>
                    <p>
                      <b>
                        <a href="/contact">Please get in touch with me</a>&nbsp;
                        if you're interested in the work displyed here and I
                        would love to chat more about it with you!
                      </b>
                    </p>
                    <hr></hr>
                  </div>
                </div>
                <div className="section">
                  <div class="slide">
                    <h3>Web Design</h3>
                    <p>
                      I have been working on web designing different desktop
                      interfaces for academics projects for at least 4 years
                      now. My preferred web design stratergy is to have
                      collaborative workshop (co-design workshops) in order to
                      scope out the design expectations and then moving on to
                      initiating the design process through wireframing followed
                      by design mock-ups, ending with a finished prodcuts that
                      fulfils the golas of the academic project
                    </p>
                    <p>
                      Click on the arrow on the right if you're intereted in
                      looking at my webdesign projects.
                    </p>
                  </div>
                  <div class="slide">
                    <h3>Kollisionen </h3>
                    <h2> (Eisenstein's House)</h2>
                    <p>
                      I worked on Kollisonen as a research associate at Urban
                      Complexity Lab at Fachhochcshule Potsdam. <br></br> Along
                      with assiting with database managment, I also contributed
                      to Kollsionen with my web design skills. I did webdesign
                      for the data visualisation website as well as the project
                      website.
                    </p>
                    <p>
                      <a href="https://uclab-potsdam.github.io/kollisionen/">
                        Explore Data Visualisation website of Kolliosion project
                        here
                      </a>
                    </p>
                    <p>
                      <a href="https://collisions-eisensteinshouse.projekte-filmuni.de">
                        and click here to look at the project website that I
                        designed
                      </a>
                    </p>
                  </div>
                  <div class="slide">
                    <h3>
                      Website of CultLab3D at Fraunhofer Institute for Computer
                      Graphics Research IGD{" "}
                    </h3>
                    <p>
                      I worked at Cultural Heritage Digitisation Lab at
                      Fraunhofer IGD as a student research assistant. <br></br>{" "}
                      I carried out digitisation projects during my experience
                      and also worked with 3D cultural heritage in VR and AR.
                      Along with that, I assited with interface design of the
                      website.
                    </p>
                    <p>
                      <a href="https://cultlab3d.de/">
                        Explore the website of CultLab3D here
                      </a>
                      <p>
                        During my experience at CultLab3D, I helped the lab
                        develop metadata scheme for their digital cultural
                        artefacts. <br></br>The work I did on metadata schema
                        was acknowledged by <br></br>European Commision document{" "}
                        <a href="https://digital-strategy.ec.europa.eu/en/library/basic-principles-and-tips-3d-digitisation-cultural-heritage">
                          Basic principles and tips for 3D digitisation of
                          cultural heritage
                        </a>
                      </p>
                    </p>{" "}
                  </div>
                </div>
                <div className="section">
                  <div class="slide">
                    <h3>Graphic Design</h3>
                    <p>
                      I have worked as a graphic desginer for past 10 years. It
                      started off as a hobby in my teen years and since then I
                      have employed my graphic designing skills for a range of
                      personal and professional activities.
                    </p>
                    <p>
                      Scroll to the right to see a few examples of my graphic
                      design journey so far.
                    </p>
                  </div>
                  <div class="slide">
                    <h1>Greeting Card Designs</h1>
                    <hr></hr>
                    <img height={395} src={GD1} alt="" />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={395} src={GD2} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={395} src={GD3} alt="" />
                  </div>
                  <div class="slide">
                    <h1>Powerpoint Design</h1>
                    <hr></hr>
                    <img height={340} src={GD4} alt="" />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={340} src={GD5} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div class="slide">
                    <h1>Logo Design</h1>
                    <hr></hr>
                    <img height={400} src={GD6} alt="" />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={400} src={GD7} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={400} src={GD8} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
                <div className="section">
                  <div class="slide">
                    <h3>3D & XR Visualisation</h3>
                    <p>
                      I learnt 3D visualisation software during my bachelors as
                      an architectural engineer where I employed it for making
                      3D models of architectural designs. As I progressed
                      forward in my career I applied there acquired skills to 3D
                      modelling and visualisation of digital musuem artefacts
                      and historical objects.
                    </p>
                    <p>
                      Scroll to the right to see a few examples of my different
                      kinds of 3D visualisations I have worked on so far.
                    </p>
                  </div>
                  <div class="slide">
                    <h1>3D cultural heritage in AR & VR</h1>
                    <hr></hr>
                    <img height={400} src={GD11} alt="" />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div class="slide">
                    <h1>3D cultural heritage in AR & VR</h1>
                    <hr></hr>
                    <img height={400} src={GD12} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div class="slide">
                    <h1>Architectural 3D Models</h1>
                    <hr></hr>
                    <img height={340} src={GD9} alt="" />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <img height={340} src={GD10} alt="" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </DESIGN>
    </Layout>
  );
};

export default Design;

const DESIGN = styled.section`
  background-color: ${BACKGROUND};

  @media only screen and (min-width: 701px) {
    .section {
      padding-left: 100px;
      padding-right: 100px;
    }
  }
  @media only screen and (max-width: 700px) {
    .section {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  & h1 {
    text-align: center;
  }
`;

export const Head = () => <SEO title="Design Portfolio | Sara Akhlaq" />;
