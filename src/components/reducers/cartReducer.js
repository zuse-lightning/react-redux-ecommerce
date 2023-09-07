import LabCoat from "../../assets/images/womens-lab-coat.jpg";
import CoffeeTumbler from "../../assets/images/coffee-tumbler.gif";
import PurplePen from "../../assets/images/purple-pen.png";
import Umbrella from "../../assets/images/umbrella.png";
import Socks from "../../assets/images/socks.png";
import SkyBluePen from "../../assets/images/skyblue-pen.png";
import { ADD_TO_CART } from "../actions/types/types";

let INITIAL_STATE = {
    items: [
        { id: 1, title: "Women's Lab Coat", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: LabCoat },
        { id: 2, title: "Coffee Tumbler", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: CoffeeTumbler },
        { id: 3, title: "Javalina Purple Pen", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: PurplePen },
        { id: 4, title: "Umbrella", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Umbrella },
        { id: 5, title: "Socks", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Socks },
        { id: 6, title: "Javalina Sky Blue Pen", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: SkyBluePen },
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existed_item = state.addedItems.find(item => action.id === item.id);
        if (existed_item) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    } else {
        return state;
    }
}

export default cartReducer;