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
                <b>01.02.2025 - 30.11.2025</b>
              </p>
            </th>
            <td>
              <p>
                Awarded{" "}
                <a href="https://www.museumfuernaturkunde.berlin/en/museum/today/museum/themuseumslab">
                  {" "}
                  TheMuseumLab
                </a>{" "}
                2025 fellowship. Theme of this year is 'Colonialism and
                Resistance'.
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b>03.03.2025</b>
              </p>
            </th>
            <td>
              <p>
                New publication: Díez Díaz, V., Akhlaq, S., Kaiser, K. et al.
                (2025). Nat. Rev. Biodivers. 1, 145–146 (2025).{" "}
                <a href="https://www.nature.com/articles/s44358-025-00031-2">
                  {" "}
                  Digitization as a research methodology in colonial natural
                  history collections.
                </a>{" "}
                https://doi.org/10.1038/s44358-025-00031-2
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b>22.12.2024/2025</b>
              </p>
            </th>
            <td>
              <p>
                New Publication: Depraetere, M., Akhlaq, S., Díaz, V.D.,
                Heumann, I., Schwarz, D. (2025).{" "}
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-78590-0_8#citeas">
                  Virtual Access to Fossil & Archival Material from the German
                  Tendaguru Expedition (1909–1913): More Than 100 years of
                  Data-Meta-paradata Management for Improved Standardisation.
                </a>
                In: Ioannides, M., Baker, D., Agapiou, A., Siegkas, P. (eds) 3D
                Research Challenges in Cultural Heritage V. Lecture Notes in
                Computer Science, vol 15190. Springer, Cham.
                https://doi.org/10.1007/978-3-031-78590-0_8
              </p>
            </td>
          </tr>
        </table>
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
