// Ryan Petrat
"use client";

import { useRouter } from 'next/navigation';
import { usePlayer } from '@/components/PlayerContext';
import PlayerContent from "@/components/PlayerContent";
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color:rgb(29, 133, 252);
    color: white;
    border: 2px solid #000000;
    border-radius: 4px;
    cursor: pointer;
    font-size: calc(10px + 0.5vw);
    margin: 20px auto;
    &:hover {
        background-color:rgb(0, 126, 252);
    }
`;

const StyledErrorDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledPlayerDataDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const StyledP = styled.p`
    font-size: calc(10px + 0.5vw);
    margin-top: 80px;
    background-color: #005bb5;
    color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

export default function PlayerDetailsPage() {
    const router = useRouter();
    const { playerData } = usePlayer();

    if (playerData.length === 0) {
        return (
            <StyledErrorDiv>
                <StyledP>No player data available.</StyledP>
                <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
            </StyledErrorDiv>
        );
    }
    return (
        <StyledPlayerDataDiv>
            {(playerData.map((player) => (<PlayerContent key={player.playerId} player={player}/>)))}
            <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
        </StyledPlayerDataDiv>
    );
}