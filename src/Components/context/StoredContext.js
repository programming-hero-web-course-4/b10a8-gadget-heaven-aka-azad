import { createContext } from "react";

export const CartContext = createContext(
  JSON.parse(localStorage.getItem("cart")) ?? []
);

export const WishlistContext = createContext(
  JSON.parse(localStorage.getItem("wishlist")) ?? []
);

export const SetCartContext = createContext();
export const SetWishlistContext = createContext();

export const ShowCartContext = createContext();
export const SetShowCartContext = createContext();

export const PurchaseHistoryContext = createContext()
export const SetPurchaseHistoryContext = createContext()
