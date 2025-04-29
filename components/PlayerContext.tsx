// Ryan Petrat, Brendan Coyne
// Gathers and manages player data and search term to be passed through context
import { createContext, useContext, useState, ReactNode } from "react";
import { PlayerProps } from "@/types";

// Context type for player data and search term
type PlayerContextType = {
  playerData: PlayerProps[];
  setPlayerData: (data: PlayerProps[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

// Create the context with an undefined initial value
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

// Provider component for the PlayerContext
export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [playerData, setPlayerData] = useState<PlayerProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
      <PlayerContext.Provider value={{ playerData, setPlayerData, searchTerm, setSearchTerm }}>
        {children}
      </PlayerContext.Provider>
  );
};

// usePlayer Custom hook to use the PlayerContext
export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};