import { v4 as uuidv4 } from "uuid";

import dress from "../../../utils/assets/img/dress.png";
import mens from "../../../utils/assets/img/mens.png"
import shoeBlack from "../../../utils/assets/img/shoe-black.png";
import shirt from "../../../utils/assets/img/shirt.png";
import syze from "../../../utils/assets/img/syze.png";

export const dataCollections = [
    {
        id: uuidv4(),
        img: dress,
        isPromo: true,
        name: "Brand Name",
        description: "Black coat with frogs",
        price: 900,
        promoPrice: 830,
    },
    {
        id: uuidv4(),
        img: mens,
        isPromo: false,
        name: "Brand Name",
        description: "Half sleves multicolor shirt",
        price: 900,
        promoPrice: 830,
    },
    {
        id: uuidv4(),
        img: shoeBlack,
        isPromo: false,
        name: "Brand Name",
        description: "Black leather ankle boots",
        price: 900,
        promoPrice: 830,
    },
    {
        id: uuidv4(),
        img: shirt,
        isPromo: true,
        name: "Brand Name",
        description: "cream sweater",
        price: 900,
        promoPrice: 830,
    },
    {
        id: uuidv4(),
        img: syze,
        isPromo: true,
        name: "Brand Name",
        description: "summer sunglasses",
        price: 900,
        promoPrice: 830,
    },
]