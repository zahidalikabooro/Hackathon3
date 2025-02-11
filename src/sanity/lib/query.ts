import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const four = groq `*[_type == "product"] [0..3]`;

export const twoProducts = groq`*[_type == "product"] [0..1]`;

export const GET_ORDERS = `*[_type == "order"]{
    _id,
    firstName,
    lastName,
    address,
    city,
    zipCode,
    phone,
    email,
    cartItems[]->{
      name,
      price
    },
    total,
    status
  }`;
  


