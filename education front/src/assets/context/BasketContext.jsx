import React, { createContext, useState } from "react";
import useLocalHook from "../hook/useLocalHook";
export const BasketContext = createContext();
function BasketProvider({children}) {
  const [basket, setbasket] = useLocalHook("basket",[])
  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setbasket([...basket, item]);
      return;
    }
  }
  function deleteBasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }
  return (
    <BasketContext.Provider value={{ basket, addBasket, deleteBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
