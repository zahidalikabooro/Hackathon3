import AllProducts from "./allproducts/page"; // Ensure this path is correct

import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <AllProducts /> {/* Render the component properly */}
      
    </div>
  );
}
