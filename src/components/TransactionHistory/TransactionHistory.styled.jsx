import styled from "@emotion/styled";

export const TransHistory = styled.table`
  display: table;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const TabletThead = styled.thead`
  text-align: center;
  background-color: rgb(22 10 163 / 58%);; ;
`;

export const TabletTitle = styled.th`
  vertical-align: center;
  width: calc(100% / 3);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  padding: 10px;
  text-transform: uppercase;
`;

export const TabletBody = styled.tbody`
  color: #121111;
`;

export const TabletRow = styled.tr`
  &:hover {
    background-color: rgb(180, 180, 180);
  }
  &:nth-of-type(even) {
    background-color: rgb(240, 240, 240);
  }
  &:hover {
    background-color: rgb(180, 180, 180);
  }
`;

export const TabletType = styled.td`
border: 1px solid lightgrey;
padding: 0px;
text-align: center;
height: 40px;
vertical-align: center;
border-collapse: collapse;
`;

export const TabletCallType = styled.td`
padding-left: 70px;
  padding-right: 40px;
  text-align: left;
  border: 1px solid lightgrey;
  text-transform: capitalize;
  height: 40px;
  vertical-align: center;
  border-collapse: collapse;
`;