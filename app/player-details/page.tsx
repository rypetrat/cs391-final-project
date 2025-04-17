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

const StyledB = styled.b`
    color: #005bb5;
`;

const StyledB2 = styled.b<{ value: number }>`
    color: ${props => props.value > 0 ? '#4CAF50' : props.value < 0 ? '#F44336' : '#000000'};
`;

export default function StockDetailsPage() {
    const router = useRouter();
    const { playerData } = usePlayer();

    if (playerData.length === 0) {
        return (
            <div style={{textAlign: "center", padding: "20px"}}>
                <p>No player data available.</p>
                <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
            </div>
        );
    }

    return (
        <div style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
            {playerData.length > 0 ? (playerData.map((player, index) => (<PlayerContent key={index} player={player}/>))) : (<p>No player data available.</p>)}
            <StyledButton onClick={() => router.push('/')}>Back to Home</StyledButton>
        </div>
    );
}