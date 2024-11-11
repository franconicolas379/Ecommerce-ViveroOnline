"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "../products/page";

interface IProductInCarrito extends IProduct {
  cantidad: number;
}

interface ICarritoContext {
  carrito: IProductInCarrito[];
  addToCarrito: (product: IProduct) => void;
  removeFromCarrito: (productId: number) => void;
  clearCarrito: () => void;
}

const CarritoContext = createContext<ICarritoContext | undefined>(undefined);

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<IProductInCarrito[]>([]);

  <form>
      <input>
      </input>
  </form>

  const addToCarrito = (product: IProduct) => {
    setCarrito((prevCarrito) => {
      const existingProduct = prevCarrito.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCarrito.map((item) =>
          item._id === product._id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...product, cantidad: 1 }];
      }
    });
  };

  const removeFromCarrito = (productId: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item._id !== productId));
  };
  const clearCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito, clearCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (context === undefined) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};