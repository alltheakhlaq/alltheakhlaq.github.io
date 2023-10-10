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
                <b> 05.10.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Keynote at&nbsp;
                <a href="https://forge23.uni-tuebingen.de/">
                Forschungsdaten in den Geisteswissenschaften (FORGE) 2023
                </a>.
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b>06.09.2023</b>
              </p>
            </th>
            <td>
              <p>
                Presentation titled <b>'Intersectional Feminist Perspectives on Digital Museum Collections through Counterdata Visualisations'</b> at&nbsp;
                <a href="https://hdsm.hypotheses.org/1104">
                Connecting, co-designing and engaging with digital collections and infrastructures: challenges and case studies
                </a>.
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 17.04.2023 - 21.04.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Partcipation in&nbsp;
                <a href="https://www.mkg-hamburg.de/en/neo-lab">
                  Data Exploration Sprint
                </a>
                &nbsp;at Museum für Kunst und Gewerbe Hamburg.
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                <b> 17.03.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Participation in panel on Digitalisierung kulturellen Erbes und postkoloniale
                Perspektiven during&nbsp;
                <a href="https://dhd2023.dig-hum.de/page/programmubersich">
                  DhD 2023.
                </a>
              </p>
            </td>
          </tr>
        
        </table>
        <table>
        <tr>
            <th>
              <p>
                <b> 13.02.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Lecture/Workshop on&nbsp;
                <a href="https://journal.culanth.org/index.php/ca/article/view/ca29.2.09">
                  Writing the Implosion
                </a>
                &nbsp;during the course 'Physical Interaction Design and
                Prototyping' at Linköping University.
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <p>
                {" "}
                <b> 31.01.2023 </b>
              </p>
            </th>
            <p>
              <td>
                Workshop with Lauren Klein's project team <b>Data by Design</b>{" "}
                to explore different forms of labour that go into the project.
              </td>
            </p>
          </tr>
          <tr>
            <th>
              <p>
                <b> 10.01.2023- 13.01.2023 </b>
              </p>
            </th>
            <td>
              <p>
                Student Volunteer for the PC meeting during&nbsp;
                <a href="https://chi2023.acm.org/">
                  ACM CHI Conference on Human Factors in Computing Systems 2023
                </a>
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
