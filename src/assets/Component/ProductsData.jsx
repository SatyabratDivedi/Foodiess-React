import Burger1 from "../assets/burger1.png";
import Burger2 from "../assets/burger2.png";
import Burger3 from "../assets/burger3.png";
import Burger4 from "../assets/burger4.png";
import moctail1 from "../assets/moctail1.png";
import moctail2 from "../assets/moctail2.png";
import moctail3 from "../assets/moctail3.png";
import moctail4 from "../assets/moctail4.png";

const products = [
  {
    id: 1,
    item: "burger",
    itemName: "Lamb Burger",
    imageSrc: Burger1,
    imageAlt: "Lamb burger image.",
    price: "$11",
    ingredients:
      "ground lamb, garlic powder, rosemary, thyme, salt, and pepper",
  },
  {
    id: 2,
    item: "burger",
    itemName: "Chicken Burger",
    imageSrc: Burger2,
    imageAlt: "Chicken burger image.",
    price: "$14",
    ingredients:
      "Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo",
  },
  {
    id: 3,
    item: "burger",
    itemName: "Cheese Burger",
    imageSrc: Burger3,
    imageAlt: "Cheese burger image.",
    price: "$21",
    ingredients: "a bun, ground beef patty, cheese, lettuce, and tomato",
  },
  {
    id: 4,
    item: "burger",
    itemName: "Bacon Burger",
    imageSrc: Burger4,
    imageAlt: "Bacon burger image.",
    price: "$9",
    ingredients: "ground chuck, chopped bacon, onion, and Worcestershire sauce",
  },
  {
    id: 5,
    item: "moctail",
    itemName: "Strawberry Margarita",
    imageSrc: moctail1,
    imageAlt: "Bacon burger image.",
    price: "$26",
    ingredients:
      "tequila, orange liqueur, lime juice, simple syrup, and 2 ounces of the strawberry puree",
  },
  {
    id: 6,
    item: "moctail",
    itemName: "Alcoholic Mimosa",
    imageSrc: moctail2,
    imageAlt: "Bacon burger image.",
    price: "$29",
    ingredients:
      "Champagne and orange juice,lime juice and Worcestershire sauce",
  },
  {
    id: 7,
    item: "moctail",
    itemName: "Cosmo Moctail",
    imageSrc: moctail3,
    imageAlt: "Bacon burger image.",
    price: "$36",
    ingredients: "ground chuck, chopped bacon, onion, and Worcestershire sauce",
  },
  {
    id: 8,
    item: "moctail",
    itemName: "Mai Kai moctail",
    imageSrc: moctail4,
    imageAlt: "Bacon burger image.",
    price: "$49",
    ingredients:
      "lime juice, ground chuck, chopped bacon, onion, and Worcestershire sauce",
  },
];

export default products;
