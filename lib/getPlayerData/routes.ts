"use server";

import { PlayerProps } from '@/types';

export default async function getPlayerData(player: string): Promise<PlayerProps[]> {
    try {
        const API_URL = `https://api.nhle.com/stats/rest/en/skater/summary?limit=-1&cayenneExp=seasonId=20232024%20and%20gameTypeId=2`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data || !Array.isArray(data.data)) {
            console.log(`No valid player data found for ${player}`);
            return [];
        }

        const filteredData = data.data.filter((entry: any) => 
            entry.skaterFullName.toLowerCase().includes(player.toLowerCase())
        );

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
                blockedShots: entry.blockedShots,
                gamesPlayed: entry.gamesPlayed,
            }));

        return playerData;
    } catch (error) {
        console.log(`Error fetching player data for ${player}:`, error);
        return [];
    }

}

