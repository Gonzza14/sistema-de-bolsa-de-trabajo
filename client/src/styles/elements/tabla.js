import styled from "styled-components";
import DataTable from "react-data-table-component";

export const DataTableStyle = styled(DataTable)`
  .rdt_Table {
    text-align: left;
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    display: table;
    padding: 0;
  }

  .rdt_TableHeadRow {
    background-color: #06062a;
  }

  .rdt_TableCol {
    font-size: 1.3em;
    margin: 0;
    text-align: left;
    color: #f3f3f3;
    font-family: "Montserrat-Bold";
  }

  .rdt_TableCell {
    font-weight: normal;
    font-size: 1.3em;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
    font-family: "Montserrat";

    &:nth-last-child(1) {
      justify-content: center;
    }

    &:nth-child(1) {
      color: #e84616;
    }

    &:hover {
      background-color: #e84616;
      font-weight: bold;
      color: #f3f3f3;

      box-shadow: #c23507 -1px 1px, #c23507 -2px 2px, #c23507 -3px 3px,
        #c23507 -4px 4px, #c23507 -5px 5px, #c23507 -6px 6px;
      transform: translate3d(6px, -6px, 0);

      transition-delay: 0s;
      transition-duration: 0.4s;
      transition-property: all;
      transition-timing-function: line;

      &:nth-child(1) {
        color: #f3f3f3;
      }

      &:last-child() {
        color: #f3f3f3;
      }
    }
  }
  .rdt_TableRow {
    &:nth-child(odd) {
      background-color: #c3c1d2;
    }
    font-family: "Montserrat-Bold";
    &:nth-child(even) {
      background-color: #c3c1d2;
    }

    &:hover {
      background-color: #747191;

      .rdt_TableCell:nth-child(n) {
        color: #f3f3f3;
      }
    }
  }
`;
