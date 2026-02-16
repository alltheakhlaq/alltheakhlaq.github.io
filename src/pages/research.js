import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import RecentActivities from "../components/RecentActivities";
import { BACKGROUND } from "../assets/css/color";
import { Link } from "@reach/router";
import { SEO } from "../components/seo";

const Research = () => {
  return (
    <Layout>
      <RESEARCH>
        <RecentActivities />
        <hr></hr>
        <p>
          Jump to:&nbsp;
          <Link to="/research#xp">Past Research Experience|</Link>
          <Link to="/research#pub">Publications|</Link>
          <Link to="/research#t&l">Talks & Lectures|</Link>
          <Link to="/research#workshops">Workshops|</Link>
          <Link to="/research#edu">Education|</Link>
          <Link to="/research#lang">Languages|</Link>
        </p>
        <hr></hr>
        <span>
          <h1>Research interests</h1>
          <p>
            Digital cultural heritage, Data Feminism, Decolonial intersectional
            feminism, Data visualisation, Data gaps and biases.
          </p>
        </span>
        <hr></hr>
        <h1>Currently</h1>
        <p>
          <b>PhD student </b>
          <br></br> Since April 2023 <br></br>Chair of Humanities Data Science
          and Methodology, TU Darmstadt
          <br></br>
          Darmstadt, Germany
        </p>
        <hr></hr>
        <h1 id="xp">Past Research Experience</h1>
        <p>
          <p>
            <b>Wissenschaftlicher Mitarbeiter (Research Associate)</b>
            <br></br> September 2023 - October 2025 <br></br>Museum für
            Naturkunde, Berlin
            <br></br>
            Berlin, Germany
          </p>
          <b>Researcher </b>
          <br></br> August 2022 - April 2023 <br></br>Linköping University
          <br></br>
          Norrköping, Sweden
        </p>
        <p>
          <b>Research Associate </b>
          <br></br> May 2020 - May 2022 <br></br>Urban Complexity Lab,
          Fachhochschule Potsdam<br></br>
          Potsdam, Germany
        </p>
        <p>
          <b>Student Research Assistant </b>
          <br></br> May 2019 - April 2020 <br></br>Competence Centre Cultural
          Heritage Digitization, Fraunhofer Institute for Computer Graphics
          Research IGD<br></br>
          Darmstadt, Germany
        </p>
        <p>
          <b>Student Assistant </b>
          <br></br> January 2017 - March 2019 <br></br>European Centre for
          Information and Communication Technologies (EICT) GmbH<br></br>
          Berlin, Germany
        </p>
        <hr></hr>
        <h1 id="pub">Publications</h1>
        <p>
          Akhlaq, S., Bates, I. E., & Depraetere, M. (2026). Making the Labour
          Visible Behind the Tendaguru Dinosaur Collection Through Wikidata.
          Journal of Open Humanities Data, 12: 20, pp. 1–10. DOI:{" "}
          <a href=" https://openhumanitiesdata.metajnl.com/articles/10.5334/johd.476">
            https://doi.org/10.5334/johd.476
          </a>
        </p>
        <p>
          Díez Díaz, V., Akhlaq, S., Depraetere, M., Heumann, I., Schwarz, D.
          (2025). Risks and Responsibilities: The German Tendaguru Collection as
          Cultural Heritage and Its 3D Digitisation. In: Ioannides, M., Issini,
          G., Oliveira, D. (eds) 3D Research Challenges in Cultural Heritage IV.
          Lecture Notes in Computer Science, vol 13577. Springer, Cham. DOI:{" "}
          <a href=" https://link.springer.com/chapter/10.1007/978-3-031-93753-8_5?utm_source=researchgate.net&utm_medium=article#citeas">
            https://doi.org/10.1007/978-3-031-93753-8_5
          </a>
        </p>
        <p>
          Díez Díaz, V., Akhlaq, S., Kaiser, K. et al. (2025). Nat. Rev.
          Biodivers. 1, 145–146 (2025).{" "}
          <a href="https://www.nature.com/articles/s44358-025-00031-2">
            {" "}
            Digitization as a research methodology in colonial natural history
            collections.
          </a>{" "}
          https://doi.org/10.1038/s44358-025-00031-2
        </p>
        <p>
          Depraetere, M., Akhlaq, S., Díaz, V.D., Heumann, I., Schwarz, D.
          (2025).{" "}
          <a href="https://link.springer.com/chapter/10.1007/978-3-031-78590-0_8#citeas">
            Virtual Access to Fossil & Archival Material from the German
            Tendaguru Expedition (1909–1913): More Than 100 years of
            Data-Meta-paradata Management for Improved Standardisation.
          </a>{" "}
          In: Ioannides, M., Baker, D., Agapiou, A., Siegkas, P. (eds) 3D
          Research Challenges in Cultural Heritage V. Lecture Notes in Computer
          Science, vol 15190. Springer, Cham.
          https://doi.org/10.1007/978-3-031-78590-0_8
        </p>
        <p>
          Sara Akhlaq, Arran Ridley, Mark-Jan Bludau and Marian Dörk.{" "}
          <a href="https://zenodo.org/record/6594779">
            Data Montage: Towards Coherence in Multimodal Data Representation.
            DH Benelux 2022: RE-MIX.
          </a>{" "}
          Creation and alteration in DH, June 2022.
        </p>
        <p>
          Akhlaq, Sara, de Günther, Sabine, Kreiseler, Sarah, & Dörk, Marian.
          (2021, December 21).
          <a href="https://doi.org/10.5281/zenodo.5850850">
            Let's visit museum collections: What can we gather about the data?.
            vDHd 2021 Experimente (vDHd), virtuell.
          </a>
        </p>
        <p>
          Franco, F., Akhlaq, S., Mitchell, B., & Searleman, J. (September,
          2021)
          <a href="https://doi.org/10.1145/3450617.3471248">
            Sisters of Code. Special Interest Group on Computer Graphics and
            Interactive Techniques Conference.
          </a>
        </p>
        <p>
          Sara Akhlaq & Clara Rellensmann. (August, 2018).
          <a href="https://www.academia.edu/79824172/Heritage_conservation_and_ideologies_a_reader">
            From Church to Mosque to Museum, Influence of Religious Ideologies
            on Hagia Sophia.
          </a>{" "}
          Heritage conservation and ideologies - a reader.
        </p>
        <p>
          Sara Akhlaq. (November, 2019).
          <a href="https://www.sacredfootsteps.org/2019/11/15/the-other-heritage-hindu-temples-of-pakistan/">
            The ‘Other’ Heritage: Hindu Temples of Pakistan.
          </a>{" "}
          Sacred Footsteps.
        </p>
        <hr></hr>
        <h1 id="t&l">Talks & Lectures</h1>
        <p>
          <b>Workshop: </b> Organised and facilitated workshop, titled&nbsp;
          <a href="https://www.museumfuernaturkunde.berlin/en/science/virtual-access-fossil-and-archival-material-german-tendaguru-expedition-1909-1913">
            Thinking Through Tendaguru Dinosaurs
          </a>
          , with Tanzanian Scholars in order to discuss highliting colonial
          influences in museum data
        </p>
        <p>
          <b>Talk: </b> During the event series 'Kolloquium Provenienzforschung'
          on the topic&nbsp;
          <a href="https://kulturgutverluste.de/en/eventdocumentation/power-and-agency-data-infrastructures-museum-and-archival-collections-colloquium">
            Power and Agency in Data Infrastructures of Museum and Archival
            Collections
          </a>
          &nbsp;at German Lost Art Foundation
        </p>
        <p>
          <b>Lecture: </b> During&nbsp;
          <a href="https://hdsm.hypotheses.org/1739">
            Advanced Seminar Modern History/History of Technology
          </a>
          &nbsp;at the division Humanities Data Science and Technology at TU
          Darmstadt
        </p>
        <p>
          <b>Keynote: </b> Titled 'Intersectional Feminist and Anti-colonial
          Perspectives on Museum Data' at&nbsp;
          <a href="https://forge23.uni-tuebingen.de/">
            Forschungsdaten in den Geisteswissenschaften (FORGE) 2023
          </a>
          .
        </p>
        <p>
          {" "}
          <b>Panel: </b> Digitalisierung kulturellen Erbes und postkoloniale
          Perspektiven during&nbsp;
          <a href="https://dhd2023.dig-hum.de/page/programmubersich">
            DhD 2023
          </a>
          .
        </p>
        <p>
          {" "}
          <b>Conference Talk:</b> ‘Data Montage: Towards Coherence in Multimodal
          Data Representation’ at &nbsp;
          <a href="https://2022.dhbenelux.org/">DH Benelux 2022</a>.
        </p>
        <p>
          <b>Conference Talk: </b>Epistemic Disobedience through Counterdata
          Visualisations of Digital Cultural Heritage’ at &nbsp;
          <a href="https://dhunbound2022.ach.org/">DHUnbound 2022</a>.
        </p>
        <p>
          <b>Conference Talk: </b> ‘Decolonising Digital Cultural Heritage with
          Counterdata Visualizations’ at &nbsp;
          <a href=" https://vis4dh.dbvis.de/2021/provocations/">
            VIS4DH Workshop
          </a>
          .
        </p>
        <p>
          <b>Panel: </b> ‘Women in Data Visualisation’ in the panel Sister of
          Code during &nbsp;
          <a href=" https://s2021.siggraph.org/presenter/?uid=33877059233152786721">
            SIGGRAPH 2021
          </a>
          .
        </p>
        <p>
          <b>Lecture: </b> Coherent Data Visualisation during the project week
          at Fachhochschule Potsdam for the Zoophonie course.
        </p>
        <p>
          <b>Lecture: </b> Practicing Data Feminism: Data biases and Data Ethics
          during &nbsp;
          <a href=" https://uclab.fh-potsdam.de/visoa/">
            Visualizing Open Access Summer School 2021
          </a>
          .
        </p>
        <hr></hr>
        <h1 id="workshops">Workshops</h1>
        <p>
          <b>Workshop (29.11.2023): </b> Workshop on building bridges between
          data visualisation and VR/3D experiences at the event &nbsp;
          <a href="https://www.virtuelle-lebenswelten.de/blog-post/how-to-represent-the-virtual-29-11-2023">
            How to Represent the Virtual?
          </a>
          &nbsp;at the division SFB 1567 Virtuelle Lebenswelten at
          Ruhr-Universität Bochum
        </p>
        <p>
          <b>Workshop (05.12.2022): </b> Carried out a workshop focusing on
          exploring hidden labor in the open source software project&nbsp;
          <a href="https://www.openspaceproject.com/">OpenSpace</a>.
        </p>
        <p>
          <b>Workshop: </b> Workshop on making Data Visualisation Coherent
          during the project week at Fachhochschule Potsdam for the Zoophonie
          course.
        </p>
        <p>
          {" "}
          <b>Workshop: </b> ‘Let's visit museum collections! Chapter II’ during
          &nbsp;
          <a href="https://vdhd2021.hypotheses.org">
            Datenkulturen-Kolloquium 2021
          </a>
          .
        </p>
        <p>
          <b>Workshop: </b> ‘Let's visit museum collections! What can we gather
          about the data?’ during &nbsp;
          <a href=" https://www.uni-potsdam.de/de/digital-humanities/kulturdaten-datenkulturen/10-6-lets-visit-museum-collections">
            vDHd2021
          </a>
          .
        </p>
        <hr></hr>
        <h1 id="edu">Education</h1>
        <p>
          <b>MA Heritage Conservation and Site Management </b>
          <br></br> October 2016 - October 2019 <br></br>Brandenburg University
          of Technology Cottbus-Senftenberg
          <br></br>
          Cottbus, Germany
        </p>
        <p>
          <b>B.Sc. Architectural Engineering </b>
          <br></br> November 2010 - August 2014 <br></br>University of
          Engineering and Technology Lahore
          <br></br>
          Lahore, Pakistan
        </p>
        <hr></hr>
        <h1 id="lang">Languages</h1>
        <p>Urdu (native level), English (fluent), German (advanced level).</p>
        <hr></hr>
        {/* <h1>Skills </h1> */}
      </RESEARCH>
    </Layout>
  );
};

export default Research;

const RESEARCH = styled.section`
  background-color: ${BACKGROUND};
  padding-top: 30px;
  padding-bottom: 50px;

  @media only screen and (min-width: 701px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media only screen and (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Head = () => <SEO title="Research | Sara Akhlaq" />;
