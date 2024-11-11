"use client";

import { useCarrito } from "@/app/carrito/carritoContext";
import Link from "next/link";

const navItems = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "Shop",
        route: "/products",
    },
    {
      label: "User",
      route: "/login",
    }
];

export default function Navigation() {
    const { carrito } = useCarrito();

    return (
      <nav className="w-full flex justify-center items-center p-4 bg-green-300">
      <div className="flex justify-between items-center w-[1200px] gap-8">
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.route} className="text-2xl text-green-800 hover:text-gray-300 hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
  
        <div className="relative">
          <Link href="/carrito" className="flex items-center">
            <span className="text-2xl text-green-800">🛒 Carrito</span>
            {carrito.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
                {carrito.reduce((total, product) => total + product.cantidad, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
      );
}