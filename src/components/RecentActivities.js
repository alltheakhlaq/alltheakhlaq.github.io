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
              <b> 13.02.2023 </b>
            </th>
            <td>
              Lecture/Workshop on&nbsp;
              <a href="https://journal.culanth.org/index.php/ca/article/view/ca29.2.09">
                Writing the Implosion
              </a>
              &nbsp;during the course 'Physical Interaction Design and
              Prototyping' at Linköping University.
            </td>
          </tr>
          <tr>
            <th>
              <b> 31.01.2023 </b>
            </th>
            <td>
              Workshop with Lauren Klein's project team <b>Data by Design</b> to
              explore different forms of labour that go into the project.
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <th>
              <b> 10.01.2023- 13.01.2023 </b>
            </th>
            <td>
              Student Volnteer for the PC meeting during&nbsp;
              <a href="https://chi2023.acm.org/">
                ACM CHI Conference on Human Factors in Computing Systems 2023
              </a>
            </td>
          </tr>
          <tr>
            <th>
              <b> 05.12.2022 </b>
            </th>
            <td>
              Carried out a workshop focusing on exploring hidden labor in the
              open source software project&nbsp;
              <a href="https://www.openspaceproject.com/">OpenSpace</a>
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
  padding: 20px;

  tr {
    padding: 100px;
    border: 1px solid black;
  }

  th {
    color: ${DARK};
    width: 200px;
  }
  td {
    color: ${DARK};
  }
`;

export default RecentActivities;
