"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const router = useRouter();


  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div key={item._id} className="p-4 flex flex-col items-center border rounded-lg shadow-md">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  className="h-32 w-32 object-cover mb-2"
                  alt="image"
                  width={500}
                  height={500}
                />
              )}
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">${item.price}</p>
              <div className="flex items-center gap-2 my-2">
                <button onClick={() => handleDecrement(item._id)} className="border px-2 py-1 rounded">
                  <Minus size={16} />
                </button>
                <span className="text-lg font-bold">{item.stockLevel}</span>
                <button onClick={() => handleIncrement(item._id)} className="border px-2 py-1 rounded">
                  <Plus size={16} />
                </button>
              </div>
              <button onClick={() => handleRemove(item._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                <Trash2 size={16} className="mr-2" /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <h2 className="text-xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
          <button onClick={handleProceed} className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
