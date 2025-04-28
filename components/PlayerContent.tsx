import { PlayerProps } from "@/types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 40px 0;
  background-color: #005bb5;
  color: white;
  border: 2px solid #000000;
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
  const playerTimeOnIce = player.timeOnIce / 60; // Convert from seconds to minutes
  return (
      <StyledDiv>
        <StyledTable>
          <thead>
          <tr>
            <StyledTh><u>Name</u></StyledTh>
            <StyledTh><u>Position</u></StyledTh>
            <StyledTh><u>Team</u></StyledTh>
            <StyledTh><u>Shots Taken</u></StyledTh>
            <StyledTh><u>Goals</u></StyledTh>
            <StyledTh><u>Assists</u></StyledTh>
            <StyledTh><u>Points</u></StyledTh>
            <StyledTh><u>Plus/Minus</u></StyledTh>
            <StyledTh><u>Avg Minutes on Ice</u></StyledTh>
            <StyledTh><u>Games Played</u></StyledTh>
          </tr>
          </thead>
          <tbody>
          <tr>
            <StyledTd>{player.fullName}</StyledTd>
            <StyledTd>{player.position}</StyledTd>
            <StyledTd>{player.teamAbbrevs}</StyledTd>
            <StyledTd>{player.shots}</StyledTd>
            <StyledTd>{player.goals}</StyledTd>
            <StyledTd>{player.assists}</StyledTd>
            <StyledTd>{player.points}</StyledTd>
            <StyledTd>{player.plusMinus}</StyledTd>
            <StyledTd>{playerTimeOnIce.toFixed(0)}</StyledTd>
            <StyledTd>{player.gamesPlayed}</StyledTd>
          </tr>
          </tbody>
        </StyledTable>
      </StyledDiv>
  );
}