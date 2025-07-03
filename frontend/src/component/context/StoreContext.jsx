
import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const StoreContext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token , setToken] = useState("")
  const url = "http://localhost:4000"
  const [food_list, setFoodlist] = useState([])
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalamount += itemInfo.price * cartItems[item];
      }
    }
    return totalamount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list")
    setFoodlist(response.data.data)
  }
  console.log(food_list)
    useEffect(() => {
    if (localStorage.getItem("Token")) {
      setToken(localStorage.getItem("Token"))
      }
      fetchFoodList()
  } , [])
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StorecontextProvider;
