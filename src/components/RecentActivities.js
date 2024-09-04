import React from "react";
import styled from "styled-components";
import { BROWN, DARK } from "../assets/css/color";
import RecentActivitiesSlider from "./RecentActivitiesSlider";

const RecentActivities = () => {
  return (
    <TABLE>
      <h2>Recent activities</h2>
      <RecentActivitiesSlider>
        <table>
          <tr>
            <th>
              <p>
                <b> 01.03.2024 - Present </b>
              </p>
            </th>
            <td>
              <p>
                Organising and facilitating series of internal workshops, as
                part of the project&nbsp;
                <a href="https://www.museumfuernaturkunde.berlin/en/science/virtual-access-fossil-and-archival-material-german-tendaguru-expedition-1909-1913">
                  Virtual access to fossil and archival material from the German
                  Tendaguru Expedition (1909-1913)
                </a>
                , in order to discuss just representation of musuem data of
                colonial nature
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 10.07.2024 - 11.07.2024 </b>
              </p>
            </th>
            <td>
              <p>
                Organised and facilitated workshop, titled&nbsp;
                <a href="https://www.museumfuernaturkunde.berlin/en/science/virtual-access-fossil-and-archival-material-german-tendaguru-expedition-1909-1913">
                  Thinking Through Tendaguru Dinosaurs
                </a>
                , with Tanzanian Scholars in order to discuss highliting
                colonial influences in museum data
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 28.02.2024 </b>
              </p>
            </th>
            <td>
              <p>
                Talk during the event series 'Kolloquium Provenienzforschung' on
                the topic&nbsp;
                <a href="https://kulturgutverluste.de/en/eventdocumentation/power-and-agency-data-infrastructures-museum-and-archival-collections-colloquium">
                  Power and Agency in Data Infrastructures of Museum and
                  Archival Collections
                </a>
                &nbsp;at German Lost Art Foundation
              </p>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              <p>
                <b> 29.11.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Workshop on building bridges between data visualisation and
                VR/3D experiences at the event &nbsp;
                <a href="https://www.virtuelle-lebenswelten.de/blog-post/how-to-represent-the-virtual-29-11-2023">
                  How to Represent the Virtual?
                </a>
                &nbsp;at the division SFB 1567 Virtuelle Lebenswelten at
                Ruhr-Universität Bochum
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 14.11.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Lecture during&nbsp;
                <a href="https://hdsm.hypotheses.org/1739">
                  Advanced Seminar Modern History/History of Technology
                </a>
                &nbsp;at the division Humanities Data Science and Technology at
                TU Darmstadt
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 05.10.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Keynote at&nbsp;
                <a href="https://forge23.uni-tuebingen.de/">
                  Forschungsdaten in den Geisteswissenschaften (FORGE) 2023
                </a>
                .
              </p>
            </td>
          </tr>
        </table>
      </RecentActivitiesSlider>
    </TABLE>
  );
};

const TABLE = styled.section`
  background-color: ${BROWN};
  font-family: "IBM Plex Mono", monospace;

  td {
    color: ${DARK};
  }
  th {
    color: ${DARK};
  }

  tr {
    border: 1px solid black;
  }

  @media only screen and (min-width: 701px) {
    padding: 15px;

    table {
      padding-left: 90px;
      padding-right: 90px;
    }

    tr {
      padding: 100px;
      border: 1px solid black;
    }

    th {
      width: 180px;
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 10px;

    tr {
      padding: 10px;
      border: 1px solid black;
    }

    th {
      width: 50px;
      padding-right: 5px;
    }
  }
`;

export default RecentActivities;
