// Ryan Petrat, Eva Romero, Brendan Coyne
// Defines the layout for the home page of the application
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/components/PlayerContext";
import getPlayerSpotlight from "@/lib/getPlayerSpotlight/routes";
import  getPlayerData from "@/lib/getPlayerData/routes";
import styled from "styled-components";
import SearchHistory from "@/components/SearchHistory";
import SpotlightPlayerPreview from "@/components/SpotlightPlayerPreview";

const StyledInput = styled.input`
  padding: 8px;
  margin: 0 10px;
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: calc(7px + 0.5vw);
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(29, 133, 252);
  margin-top: 10px;
  color: white;
  border: 2px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  &:hover {
    background-color: rgb(0, 126, 252);
  }
`;

const StyledOuterDiv = styled.div`
  text-align: center;
  margin-top: 80px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

const StyledInnerDiv = styled.div`
  background-color: #005bb5;
  margin-bottom: 50px;
  padding: 2%;
  padding-bottom: 3%;
  margin: 0 auto;
  width: 30%;
  border-radius: 6px;
  border: 2px solid #000000;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const StyledPreviewSection = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  color: white;
`;

const InnerStyledPreviewSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const [player, setPlayer] = useState("");
  const [year, setYear] = useState(2024);
  const [featuredPlayers, setFeaturedPlayers] = useState<any[]>([]);
  const { setPlayerData } = usePlayer();
  const router = useRouter();

  // Fetches featured players spotlight data
  useEffect(() => {
    const fetchSpotlight = async () => {
      try {
        const data = await getPlayerSpotlight();
        setFeaturedPlayers(data);
      } catch (err) {
        console.error("Error fetching spotlight:", err);
      }
    };
    fetchSpotlight();
  }, []);

  // Fetching player info from search query 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await getPlayerData(player, year);
      setPlayerData(data);

      // Update search history
      let history: string[] = JSON.parse(sessionStorage.getItem("searchHistory") || "[]");
      if (!history.includes(player)) {
        history = [player, ...history].slice(0, 5);
        sessionStorage.setItem("searchHistory", JSON.stringify(history));
      }

      router.push("/player-details");
    } catch (err) {
      console.error("Error fetching player:", err);
    }
  };

  return (
      <StyledOuterDiv>
        <StyledInnerDiv>
          <h1>Enter an NHL player&apos;s name:</h1>
          <form onSubmit={handleSubmit}>
            {/* Input for the players name */}
            <StyledInput
              type="text"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              placeholder="Player Name"
              required
            />
            {/* Input for the year */}
            <StyledInput
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              placeholder="Start Year (e.g., 2023)"
              required
            />
            <StyledButton type="submit">Search</StyledButton>
          </form>
        </StyledInnerDiv>

        {/* Search History Component */}
        <SearchHistory />

        {/* Featured players Component */}
        <StyledPreviewSection>
          <h1>Featured Players</h1>
          <InnerStyledPreviewSection>
            {featuredPlayers.map((p) => (
                <SpotlightPlayerPreview key={p.playerId} player={p} />
            ))}
          </InnerStyledPreviewSection>
        </StyledPreviewSection>
      </StyledOuterDiv>
  );
}