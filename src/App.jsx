import { TeamProvider, useTeam } from "./context/TeamContext";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PlayerList from "./components/PlayerList";
import SelectedPlayers from "./components/SelectedPlayers";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function AppContent() {
  const { view } = useTeam();
  return (
    <>
      <Navbar />
      <Banner />
      {view === "available" ? <PlayerList /> : <SelectedPlayers />}
      <Newsletter />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <TeamProvider>
      <AppContent />
    </TeamProvider>
  );
}
