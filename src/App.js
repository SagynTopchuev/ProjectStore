import "./App.css";
// import { Basket } from "./components/busket/Basket";
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
      {/* <Basket /> */}
    </div>
  );
}

export default App;
