"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const fetchedCartItems = await getCartItems();
      setCartItems(Array.isArray(fetchedCartItems) ? fetchedCartItems : []);
    };
    fetchCartItems();
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    setDiscount(appliedDiscount ? Number(appliedDiscount) || 0 : 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      address: !formValues.address.trim(),
      city: !formValues.city.trim(),
      zipCode: !formValues.zipCode.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }
    const orderData = {
      _type: "order",
      ...formValues,
      cartItems: cartItems.map((item) => ({ _type: "reference", _ref: item._id })),
      total: Math.max(cartItems.reduce((sum, item) => sum + Number(item.price || 0) * (item.quantity || 1), 0) - discount, 0),
      status: "pending",
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4">
          <Link href="/cart" className="text-[#666666] hover:text-black transition text-sm">Cart</Link>
          <CgChevronRight className="w-4 h-4 text-[#666666]" />
          <span className="text-sm">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
            {Object.keys(formValues).map((field) => (
              <div key={field} className="mb-4">
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  id={field}
                  type="text"
                  value={formValues[field as keyof typeof formValues]} 
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                    formErrors[field as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors[field as keyof typeof formErrors] && <p className="text-sm text-red-500">This field is required.</p>}
              </div>
            ))}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              disabled={isLoading}
            >
              {isLoading ? "Placing Order..." : "Place Order"}
            </button>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && <Image src={urlFor(item.image).url()} alt={item.name} width={64} height={64} className="object-cover" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.quantity || 1}</p>
                  </div>
                  <p className="text-sm font-medium">${(Number(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">Subtotal: <span className="font-medium">${cartItems.reduce((sum, item) => sum + Number(item.price || 0) * (item.quantity || 1), 0).toFixed(2)}</span></p>
              <p className="text-sm">Discount: <span className="font-medium">-${discount.toFixed(2)}</span></p>
              <p className="text-lg font-semibold">Total: ${Math.max(cartItems.reduce((sum, item) => sum + Number(item.price || 0) * (item.quantity || 1), 0) - discount, 0).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
