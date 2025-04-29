// Eva Romero, Brendan Coyne
// Defines the function to fetch player spotlight data from the NHL API
"use server";

import { PlayerProps } from "@/types";

// Function to fetch player spotlight data
export default async function getPlayerSpotlight(): Promise<PlayerProps[]> {
  try {
    const API_URL = `https://api-web.nhle.com/v1/player-spotlight`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      console.log("No spotlight data found");
      return [];
    }

    return data.map((entry: any) => ({
      playerId: entry.playerId,
      fullName: entry.name.default,
      position: entry.position,
      teamAbbrevs: entry.teamTriCode,
      headshot: entry.headshot,
      shots: 0,
      goals: 0,
      assists: 0,
      points: 0,
      plusMinus: 0,
      timeOnIce: 0,
      blockedShots: 0,
      gamesPlayed: 0,
      hits: 0,
    }));
  } catch (error) {
    console.log("Error fetching player spotlight data:", error);
    return [];
  }
}