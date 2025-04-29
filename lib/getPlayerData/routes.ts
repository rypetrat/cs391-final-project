// Ryan Petrat, Brendan Coyne, Eva Romero
// Defines the function to fetch player data from the NHL API
"use server";

import { PlayerProps } from '@/types';

export default async function getPlayerData(player: string, year1: number): Promise<PlayerProps[]> {
    try {
        const year2 = year1 + 1;
        const seasonId = `${year1}${year2}`;
        // Construct the API URL using the seasonId/year
        const API_URL = `https://api.nhle.com/stats/rest/en/skater/summary?limit=-1&cayenneExp=seasonId=${seasonId}%20and%20gameTypeId=2`;
        // fetch the data from the API
        const response = await fetch(API_URL);
        const data = await response.json();

        // Check if the data exists and contains valid player information
        if (!data || !Array.isArray(data.data)) {
            console.log(`No valid player data found for ${player}`);
            return [];
        }

        // Filter the data for a specific player
        const filteredData = data.data.filter((entry: any) =>
            entry.skaterFullName.toLowerCase().includes(player.toLowerCase())
        );

        // Map the filtered data to the PlayerProps data format
        const playerData: PlayerProps[] = filteredData.map((entry: any) => ({
            playerId: entry.playerId,
            fullName: entry.skaterFullName,
            position: entry.positionCode,
            teamAbbrevs: entry.teamAbbrevs,
            shots: entry.shots,
            goals: entry.goals,
            assists: entry.assists,
            points: entry.points,
            plusMinus: entry.plusMinus,
            timeOnIce: entry.timeOnIcePerGame,
            gamesPlayed: entry.gamesPlayed,
        }));

        // Return the PlayerProps data
        return playerData;
    } catch (error) {
        console.log(`Error fetching player data for ${player}:`, error);
        return [];
    }

}