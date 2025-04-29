// Ryan Petrat, Brendan Coyne
import { createContext, useContext, useState, ReactNode } from "react";
import { PlayerProps } from "@/types";

type PlayerContextType = {
  playerData: PlayerProps[];
  setPlayerData: (data: PlayerProps[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [playerData, setPlayerData] = useState<PlayerProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
      <PlayerContext.Provider value={{ playerData, setPlayerData, searchTerm, setSearchTerm }}>
        {children}
      </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};