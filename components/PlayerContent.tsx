import { PlayerProps } from "@/types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 40px 0;
  background-color: #005bb5;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const StyledTh = styled.th`
  color:rgb(32, 32, 32);
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
`;

const StyledDiv = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 0.25%;
`;

export default function PlayerContent({ player }: {player: PlayerProps}) {
  return (
    <StyledDiv>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh><u>Stat 1</u></StyledTh>
            <StyledTh><u>Stat 2</u></StyledTh>
            <StyledTh><u>Stat 3</u></StyledTh>
            <StyledTh><u>Stat 4</u></StyledTh>
            <StyledTh><u>Stat 5</u></StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd> </StyledTd>
            <StyledTd> </StyledTd>
            <StyledTd> </StyledTd>
            <StyledTd> </StyledTd>
            <StyledTd> </StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </StyledDiv>
  );
}