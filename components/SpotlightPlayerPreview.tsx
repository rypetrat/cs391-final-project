// Eva Romero

"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

// Importing to make preview clickable
import { usePlayer } from "@/components/PlayerContext";
import getPlayerData from "@/lib/getPlayerData/routes";


const Card = styled.div`
  background-color: #005bb5;
  color: white;
  width: 180px;
  margin: 10px;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #000000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    background-color: #003b7d;
    transform: translateY(-4px);
  }
`;

const Headshot = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const Name = styled.h4`
  margin: 0 0 8px;
  font-size: 1rem;
`;

const Subtitle = styled.p`
  margin: 2px 0;
  font-size: 0.85rem;
`;

export default function SpotlightPlayerPreview({ player }: { player: any }) {
  const router = useRouter();
  const { setPlayerData } = usePlayer();

  console.log("Spotlight headshot URL:", player.headshot);

  const handleClick = async () => {
    try {
      const data = await getPlayerData(player.fullName, 2024);
      setPlayerData(data);
      router.push('/player-details');
    } catch (error) {
      console.error('Error fetching detailed player data:', error);
    }
  };

  return (
      <Card onClick={handleClick}>
        {player.headshot && <Headshot src={player.headshot} alt={`${player.fullName} headshot`} />}
        <Name>{player.fullName}</Name>
        <Subtitle>Position: {player.position}</Subtitle>
        <Subtitle>Team: {player.teamAbbrevs}</Subtitle>
      </Card>
  );
}