import "./App.css";
import { Header } from "./components/header/Header";
import { MealSummary } from "./components/meal-summary/MealSummary.jsx";
import { Meals } from "./components/meals/Meals";

function App() {
  return (
    <div className="Appp">
      <Header />
      <div className="App">
        <MealSummary />
      </div>
        <Meals />
    </div>
  );
}

export default App;
