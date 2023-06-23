import { useActiveButton } from "./utils/handlers";
import UserCard from "./components/UserCard";
import data from "./data.json";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  const { activeButton, setActiveButton, handleChangePeriod } = useActiveButton();
  if (!activeButton) {
    setActiveButton("daily")
  }
  return (
    <main>
      <section className="container">
        <UserCard
          activeButton={activeButton}
          handleChangePeriod={handleChangePeriod}
        />
        <CardsContainer data={data} activeButton={activeButton} setActiveButton={setActiveButton} />
      </section>
    </main>
  );
};

export default App;
