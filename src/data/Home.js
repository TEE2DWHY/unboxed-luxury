// Images
import Lv from "../assets/images/LV.png";
import TomFord from "../assets/images/tomford.png"
import Puma from "../assets/images/Puma.png"
import Swift from "../assets/images/swift.png"
import Alexander from "../assets/images/Alexander.png"
import DandG from "../assets/images/D&G.png"
import DandG1 from "../assets/images/D&G.png"
import Tom from "../assets/images/TomFord-shoe.png"
import Hero from "../assets//images/hero-img.png"
import Tornado from "../assets/images/Tornado.png"
import Nike from "../assets/images/Nike.png"

const brand = [
    {
        id:1,
        img: `${Lv}`,
        alt: "louis-vuitton",
    },
    {
        id:2,
        img: `${TomFord}`,
        alt: "TomFord",
    },
    {
        id:3,
        img: `${Puma}`,
        alt: "louis-vuitton",
    },
    {
        id:4,
        img: `${Swift}`,
        alt: "louis-vuitton",
    },
    
]

export const dressShoeCollection = [
    {
        id: 1,
        img: `${Alexander}`,
        title: "Berlutti",
        details: "Can be Won On Native",
        price: "₦20,000",
        minus: "fa-solid fa-circle-minus",
        ids: "berlutti",
        addition: "fa-solid fa-circle-plus",
        buttonText: "Add to Bag"
    },
    {
        id: 2,
        img: `${DandG}`,
        title: "Dolce & Gabbana",
        details: "Can be Won On Native",
        price: "₦20,000",
        minus: "fa-solid fa-circle-minus",
        ids: "DandG",
        addition: "fa-solid fa-circle-plus",
        buttonText: "Add to Bag"
    },
    {
        id: 3,
        img: `${DandG1}`,
        title: "Dolce & Gabbana",
        details: "Can be Won On Native",
        price: "₦20,000",
        minus: "fa-solid fa-circle-minus",
        ids: "DandG1",
        addition: "fa-solid fa-circle-plus",
        buttonText: "Add to Bag"
    },
    {
        id: 4,
        img: `${Tom}`,
        title: "TomFord",
        details: "Can be Won On Native",
        price: "₦20,000",
        minus: "fa-solid fa-circle-minus",
        ids: "TomFord",
        addition: "fa-solid fa-circle-plus",
        buttonText: "Add to Bag"
    }

]

export const latestArrivals = [
    {
        id: 1,
        img: `${Hero}`,
        alt:"Alexander Mcqueen-img",
        minus:"fa-solid fa-circle-minus",
        ids: "alexander-mcqueen",
        plus:"fa-solid fa-circle-plus",
        buttonText: "Add to Bag",
        title: "Nike",
        detail1: "2021 Black",
        detail2: "Male",
        price: "₦49,000",

    },
    {
        id: 2,
        img: `${Tornado}`,
        alt:"Nike-img",
        minus:"fa-solid fa-circle-minus",
        ids: "nike",
        plus:"fa-solid fa-circle-plus",
        buttonText: "Add to Bag",
        title: "Nike",
        detail1: "2021 Black",
        detail2: "Male",
        price: "₦49,000",
    },
    {
        id: 3,
        img: `${Nike}`,
        alt:"Nike-img",
        minus:"fa-solid fa-circle-minus",
        ids: "nike1",
        plus:"fa-solid fa-circle-plus",
        buttonText: "Add to Bag",
        title: "Alexander Mcqueen",
        detail1: "2021 Orange",
        detail2: "Male",
        price: "₦49,000",
    }
]



export default brand

