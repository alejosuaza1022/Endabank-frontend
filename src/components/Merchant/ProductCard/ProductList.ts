import ProductCardObject from "./ProductCardObject.interface";
import jordan1 from "../../../assets/jordan1.jpg"
import jordan11 from "../../../assets/jordan11.jpg"
import jordan4 from "../../../assets/jordan4.jpg"
import yeezy from "../../../assets/yeezy.jpg"
import jordanlow from "../../../assets/jordanlow.jpg"
import airforce from "../../../assets/airforce.jpg"
import jordanracer from "../../../assets/jordanracer.jpg"
import nikeair96 from "../../../assets/nike96.jpg"

const products: Array<ProductCardObject> = [
    {
        id: 1,
        name: "Air Jordan 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 10,
        placeToPickUp: "Medellín, Colombia",
        price: 200000,
        urlImage: jordan1
    },
    {
        id: 2,
        name: "Jordan Retro 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 5,
        placeToPickUp: "Medellín, Colombia",
        price: 330000,
        urlImage: jordan4
    },
    {
        id: 3,
        name: "Air Jordan 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 7,
        placeToPickUp: "Medellín, Colombia",
        price: 210000,
        urlImage: jordan11
    },
    {
        id: 4,
        name: "Jordan Racer ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 15,
        placeToPickUp: "Medellín, Colombia",
        price: 202000,
        urlImage: jordanracer
    },
    {
        id: 5,
        name: "Air Force 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 30,
        placeToPickUp: "Medellín, Colombia",
        price: 250000,
        urlImage: airforce
    },
    {
        id: 6,
        name: "Nike Air 96",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 1,
        placeToPickUp: "Medellín, Colombia",
        price: 170000,
        urlImage:nikeair96
    },
    {
        id: 7,
        name: "Adidas Yeezy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 2,
        placeToPickUp: "Medellín, Colombia",
        price: 280000,

        urlImage: yeezy
    },
    {
        id: 8,
        name: "Jordan 1 Low",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        publishedDays: 4,
        placeToPickUp: "Medellín, Colombia",
        price: 160000,

        urlImage: jordanlow
    },

]
export default products;