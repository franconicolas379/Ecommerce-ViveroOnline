"use client";

import { useCarrito } from "./carritoContext";


export default function CarritoPage() {
  const { carrito, removeFromCarrito, clearCarrito } = useCarrito();

  const calcularTotal = () => {
    return carrito.reduce((total, product) => total + product.price * product.cantidad, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Carrito de Compras</h2>
      {carrito.length > 0 ? (
        <div className="space-y-4">
          {carrito.map((product, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                {/* Imagen del producto */}
                <div className="w-20 h-20 relative mr-4">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-contain"
                />
                </div>
                {/* Detalles del producto */}
                <div>
                  <p className="font-semibold text-lg">{product.name}</p>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-sm text-gray-500">Cantidad: {product.cantidad}</p>
                </div>
              </div>
              {/* Botón de eliminar producto */}
              <button
                onClick={() => removeFromCarrito(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* Total de productos y precio total */}
          <div className="text-xl font-semibold mt-6 text-right">
            <p>Total de productos: {carrito.length}</p>
            <p>Total a pagar: ${calcularTotal()}</p>
          </div>

          {/* Botón para vaciar el carrito */}
          <div className="flex justify-end mt-4">
            <button
              onClick={clearCarrito}
              className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg">No hay productos en el carrito.</p>
      )}
    </div>
  );
}
// <div className="container mx-auto px-4">
//   <h2 className="text-3xl font-bold my-8">Carrito de Compras</h2>
//   {carrito.length > 0 ? (
//     <div className="space-y-4">
//       {carrito.map((product, index) => (
//         <div key={index} className="flex justify-between items-center border-b pb-2">
//           <div>
//             <p className="font-semibold">{product.title}</p>
//             <p className="text-gray-600">${product.price}</p>
//           </div>
//           <button
//             onClick={() => removeFromCarrito(product.id)}
//             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//           >
//             Eliminar
//           </button>
//         </div>
//       ))}
//       <p className="text-xl font-semibold mt-4">
//         Total de productos: {carrito.length}
//       </p>
//     </div>
//   ) : (
//     <p>No hay productos en el carrito.</p>
//   )}
// </div>