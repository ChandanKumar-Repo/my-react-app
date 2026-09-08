import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Product from './components/Product'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  const iphone = {
    id: 1,
    title: "iPhone 17 pro",
    price: "₹1,34,999",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
  };
   const samsung = {
    id: 2,
    title: "Samsung Galaxy S25",
    price: "₹79,999",
    image:
      "https://images.samsung.com/in/smartphones/galaxy-s25/buy/product_color_pinkGold_PC.png?imbypass=true",
  };
  const nokia = {
    id: 3,
    title: "Nokia 1100",
    price: "₹2,999",
    image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg",
  };

  //count is the state variable
  //setCouunt is the Function to update this variable
  //below syntax is Array Destructuring
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = [iphone, samsung, nokia];

  return (
    <div>
      {/* <h1>Our Products</h1> */}
      {/* we will display our products */}
      {/* <Product title={iphone.title} image={iphone.image} price={iphone.price}/>
      <Product title={samsung.title} image={samsung.image} price={samsung.price}/>
      <Product title={nokia.title} image={nokia.image} price={nokia.price}/> */}
      {/* {products.map((product) => (
        <Product
          title={product.title}
          image={product.image}
          price={product.price}
          key={product.title}
        />
      ))} */}
      {/* <button onClick={() => setCount(count + 1)}> Clicked {count} times</button>  */}
        <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}
export default App
