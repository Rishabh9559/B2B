import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import headphone1 from '../assets/headphone1.jpg';
import headphone2 from '../assets/headphone2.jpeg';
import headphone3 from '../assets/headphone3.jpeg';
import headphone4 from '../assets/headphone4.jpeg';
import earbuds from '../assets/earbuds.jpeg';

// Sample product data
const currentProduct = {
  name: "Premium Wireless Headphones",
  price: "$299.99",
  originalPrice: "$399.99",
  rating: 4.5,
  reviews: 128,
  description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
  images: [
    headphone1,
    headphone2,
    headphone3,
    headphone4
  ],
  offers: [
    "10% instant discount on Credit Cards",
    "Free shipping on orders above $50",
    "1 year warranty included"
  ],
  specs: [
    "Bluetooth 5.0",
    "Active Noise Cancellation",
    "30-hour battery life",
    "Quick charging"
  ]
};

const suggestedProducts = [
  { id: 1, name: "Wireless Earbuds", price: "$149", image: earbuds, tag: "Best Seller" },
  { id: 2, name: "Gaming Headset", price: "$199", image: headphone2, tag: "New" },
  { id: 3, name: "Sport Headphones", price: "$129", image: headphone3, tag: "Popular" },
  { id: 4, name: "Premium Headphones", price: "$279", image: headphone4, tag: "Featured" },
  // Add more products as needed
];

const ImageCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleImageHover = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-150"
          onMouseMove={handleImageHover}
          style={{ transform: `scale(${zoomLevel})` }}
        />
      </div>
      <div className="flex gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer ${
              mainImage === img ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductSuggestionRunner = ({ products }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-none w-[280px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-[200px] overflow-hidden rounded-t-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                {product.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {showRightButton && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left: Image Carousel */}
          <div className="lg:w-1/2">
            <ImageCarousel images={currentProduct.images} />
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">{currentProduct.name}</h1>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">{currentProduct.price}</span>
              <span className="text-lg text-gray-500 line-through">{currentProduct.originalPrice}</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">25% OFF</span>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(currentProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600">({currentProduct.reviews} reviews)</span>
            </div>

            <p className="text-gray-600">{currentProduct.description}</p>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Available Offers</h3>
              <ul className="space-y-2">
                {currentProduct.offers.map((offer, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Suggested Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <ProductSuggestionRunner products={suggestedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Product;