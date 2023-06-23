import { useActiveButton } from "./utils/handlers";
import UserCard from "./components/UserCard";
import data from "./data.json";

const App = () => {
  const { activeButton, setActiveButton, handleChangePeriod } = useActiveButton();
  return (
    <main>
      <section className="container">
        <UserCard
          activeButton={activeButton}
          handleChangePeriod={handleChangePeriod}
        />
        {
          data.map((info) => {
            if (activeButton && info.timeframes.daily) {
              console.log(info.timeframes.daily);
            }
            if (!activeButton) {
              setActiveButton("daily")
            }
          })
        }
      </section>
    </main>
  );
};

export default App;
