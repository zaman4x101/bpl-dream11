import { createContext, useContext, useState } from "react";
import { INITIAL_COINS, MAX_PLAYERS } from "../data/players";

const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [coins, setCoins] = useState(INITIAL_COINS);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("available"); // 'available' | 'selected'

  const addPlayer = (player) => {
    if (selectedPlayers.length >= MAX_PLAYERS) {
      alert(`You can only select ${MAX_PLAYERS} players!`);
      return;
    }
    if (selectedPlayers.find((p) => p.id === player.id)) {
      alert("Player already selected!");
      return;
    }
    if (coins < player.price) {
      alert("Not enough coins!");
      return;
    }
    setSelectedPlayers((prev) => [...prev, player]);
    setCoins((prev) => prev - player.price);
  };

  const removePlayer = (playerId) => {
    const player = selectedPlayers.find((p) => p.id === playerId);
    if (player) {
      setSelectedPlayers((prev) => prev.filter((p) => p.id !== playerId));
      setCoins((prev) => prev + player.price);
    }
  };

  const isSelected = (playerId) => selectedPlayers.some((p) => p.id === playerId);

  return (
    <TeamContext.Provider
      value={{ coins, selectedPlayers, view, setView, addPlayer, removePlayer, isSelected, MAX_PLAYERS }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  return useContext(TeamContext);
}
