 // Eva Romero, Brendan Coyne, Ryan Petrat
 // Defines the search history component for the application
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { usePlayer } from "@/components/PlayerContext";
import getPlayerData from "@/lib/getPlayerData/routes";

const HistoryContainer = styled.div`
    background-color: #005bb5;
    color: white;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #000000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    margin: 50px auto 0;
    text-align: center;
    width:40%;
`;

const HistoryList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const HistoryItem = styled.li`
    font-size: 16px;
    margin: 5px 0;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: rgb(0, 126, 252);
    }
`;

const SearchHistory = () => {
    // Hook to save search history
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const router = useRouter();
    const { setPlayerData } = usePlayer();

    useEffect(() => {
        // Retrieve search history from sessionStorage
        // Chose sessionStorage so the history will reset upon a new instance of dev
        const history = JSON.parse(sessionStorage.getItem("searchHistory") || "[]");
        setSearchHistory(history);
    }, []);

    const handleClick = async (player: string) => {
        try {
            const data = await getPlayerData(player, 2024);
            setPlayerData(data);
            router.push('/player-details');
        }
        catch (error) {
            console.error('Error fetching detailed player data:', error);
        }
    };
    return (
        <HistoryContainer>
            <h1>Search History</h1>
            <HistoryList>
                {searchHistory.map((player, index) => (
                    <HistoryItem key={index} onClick={() => handleClick(player)}>
                        {player}
                    </HistoryItem>
                ))}
            </HistoryList>
        </HistoryContainer>
    );
};

export default SearchHistory;