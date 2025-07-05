
import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
export const StoreContext = createContext(null);


const StorecontextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token , setToken] = useState("")
  const url = "http://localhost:4000"
  const [food_list, setFoodlist] = useState([])
  // add to cart item
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success("Item added")
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
       toast.success("Item quantity increase by 1 ")
    }
    if (token) {
      await axios.post(url + "/api/cart/add" , {itemId} , {headers : {token}})
    }
  };
  // remove from cart
  const removeFromCart =async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.success("Item removed")
    if (token) {
      await axios.post(url + "/api/cart/remove" , {itemId} , {headers : {token}})
    }
  };

const getTotalAmount = () => {
  let totalamount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = food_list.find((product) => product._id === item);

      if (itemInfo) {
        totalamount += itemInfo.price * cartItems[item];
      }
    }
  }
  return totalamount;
};


  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list")
    setFoodlist(response.data.data)
  }
const loadCartData = async (token) => {
  try {
    const response = await axios.post(url + "/api/cart/get", {}, {
      headers: { token }
    });

    if (response.data.success) {
      setCartItems(response.data.cartData);
    } else {
      console.warn("Failed to load cart data");
    }
  } catch (error) {
    console.error("Cart load error:", error.message);
  }
};

useEffect(() => {
  const initialize = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      setToken(token);
      await loadCartData(token);
    }
    fetchFoodList(); 
  };
  initialize(); 
}, []);

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
