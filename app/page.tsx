"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/components/PlayerContext";
import getPlayerData from "@/lib/getPlayerData/routes"; 
import styled from "styled-components";
import "@/app/globals.css";

const StyledInput = styled.input`
  padding: 8px;
  margin: 0 10px;
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: calc(7px + 0.5vw);
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color:rgb(29, 133, 252);
  color: white;
  border: 2px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  &:hover {
    background-color:rgb(0, 126, 252);
  }
`;

export default function Home() {
  const [player, setPlayer] = useState("");
  const { setPlayerData } = usePlayer();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await getPlayerData(player);
      setPlayerData(data); 
      router.push(`/player-details`);
    } catch (error) {
      console.error("Error fetching player data:", error);
    } 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", justifyContent: "center", display: "flex", flexDirection: "column"}}>
      <div style={{backgroundColor: "#005bb5", marginBottom: "50px", padding: "2%", paddingBottom: "3%", margin: "0 auto", width: "30%", borderRadius: "6px", border: "2px solid #000000", color: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"}}>
        <h1>Enter an NHL player's name: </h1>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Player Name" required/>
          <StyledButton type="submit">Get Player Data</StyledButton>
        </form>
      </div>
    </div>
  );
}