"use server";

import { PlayerProps } from '@/types';

export default async function getPlayerData(player: string): Promise<PlayerProps[]> {
    try {
        const API_URL = `https://api.nhle.com/stats/rest/en/skater/realtime?limit=-1&cayenneExp=seasonId=20232024%20and%20gameTypeId=2`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data || !Array.isArray(data.data)) {
            console.log(`No valid player data found for ${player}`);
            return [];
        }

        const playerData: PlayerProps[] = data.data
            .filter((entry: any) => {
                const fullName = `${entry.firstName.toLowerCase()} ${entry.lastName.toLowerCase()}`;
                return fullName.includes(player.toLowerCase());
            })
            .map((entry: any) => ({
                playerId: entry.playerId,
                firstName: entry.firstName,
                lastName: entry.lastName,
                teamAbbrev: entry.teamAbbrev,
                goals: entry.goals,
                assists: entry.assists,
                points: entry.points,
                timeOnIcePerGame: entry.timeOnIcePerGame,
            }));

        return playerData;
    } catch (error) {
        console.log(`Error fetching player data for ${player}:`, error);
        return [];
    }
}