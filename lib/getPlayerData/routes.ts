"use server";

import { PlayerProps } from '@/types';

export default async function getPlayerData(player: string): Promise<PlayerProps[]> {
    try {
        // if the API dosent use a key, remove the API_KEY variable and the line below
        const API_KEY = process.env.API_KEY;

        const API_URL = ``; // change this to the URL of the API
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
            console.log(`No valid player data found for ${player}`);
            return [];
        }

        const playerData: PlayerProps[] = data.data.map((entry: any) => ({
            // change to the stats to be collected from API
            
        }));

        return playerData;
    } catch (error) {
        console.log(`Error fetching player data for ${player}:`, error);
        return [];
    }
}