import { createContext } from "react";

export const CartContext = createContext(
  JSON.parse(localStorage.getItem("cart")) ?? []
);

export const WishlistContext = createContext(
  JSON.parse(localStorage.getItem("wishlist")) ?? []
);
