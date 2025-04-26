// Search History Component 
// Eva Romero

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const HistoryContainer = styled.div`
    background-color: #005bb5;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    margin: 50px auto 0;
    text-align: center;
    width:50%;
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
        color: #4CAF50;
    }
`;

const SearchHistory = () => {
    // Hook to save search history
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Retrieve search history from sessionStorage
        // Chose sessionStorage so the history will reset upon a new instance of dev
        const history = JSON.parse(sessionStorage.getItem("searchHistory") || "[]");
        setSearchHistory(history);
    }, []);

    const handleClick = (player: string) => {
        router.push(`/player-details?name=${player}`);
    };

    return (
        <HistoryContainer>
            <h2>Search History</h2>
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