import { v4 } from "uuid";
export const backdropElement = document.getElementById("backdrop");
export const modalElement = document.getElementById("modal");


export const Constants = [
  {
    name: "Sushi",
    title: "Finest fish and veggies",
    price: "$22.99",
    id: v4(),
  },
  {
    name: "Schnitzel",
    title: "A german specialty!",
    price: "$16.00",
    id: v4(),
  },
  {
    name: "Barbecue Burger",
    title: "American, raw, meaty",
    price: "$12.99",
    id: v4(),
  },
  {
    name: "Green Bowl",
    title: "Healthy...and green...",
    price: "$19.99",
    id: v4(),
  },
];
