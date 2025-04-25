import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ItemListContext } from "../store/store";
import { hero } from "../assets/script";

// Hero Section
const HeroSection = () => {
  const { heroImg } = useContext(ItemListContext);
  return (

    <div className="relative w-full h-[500px] mt-16">
      <div className="w-full h-full">
        <div className="flex justify-between items-center h-full px-6 bg-gradient-to-r from-[#504B38] to-[#635E48] rounded-lg shadow-lg">
          <div className="flex flex-col justify-center w-1/2 p-6">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to BizFlow</h1>
            <p className="text-lg text-white mb-4">Your one-stop solution for all wholesale needs</p>
            <Link to={"/products"}>
              <button className="px-6 py-3 mt-5 bg-[#EBE5C2] text-[#504B38] rounded-lg hover:bg-[#D4CDA1] transition-colors duration-300">
                Explore Now
              </button>
            </Link>
          </div>

          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img className="w-full" src={hero} alt="" />
            </div>

          </div>
        </div>
        {/* <img
          src={heroImg[0]}
          className="w-full h-full object-contain md:object-cover"
          alt="Hero"
        /> */}
      </div>
    </div>
  );
};

// Explore Section
const ExploreSection = () => {
  const { exploreItems } = useContext(ItemListContext);

  return (
    <div className="w-full mb-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exploreItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-5 shadow-lg transition-shadow`}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {item.images.map((img, imgIndex) => (
                <Link
                  to={img.link}
                  key={imgIndex}
                  className="group relative h-40 overflow-hidden rounded-lg"
                >
                  <img
                    src={`images/${img.src}`}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#504B38] bg-opacity-90 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium truncate">{img.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Offers Section
const OffersSection = () => {
  const { offerItems } = useContext(ItemListContext);

  return (
    <div className="w-full mb-6 p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Special Offers</h2>
      <p className="text-center text-gray-600 mb-6">Exclusive deals and discounts for our customers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-5 shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {item.images.map((img, imgIndex) => (
                <Link
                  to={img.link}
                  key={imgIndex}
                  className="group relative h-40 overflow-hidden rounded-lg"
                >
                  <img
                    src={`images/${img.src}`}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#504B38] bg-opacity-90 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium truncate">{img.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// TopPicks Section
const TopPicks = () => {
  const { topPicks } = useContext(ItemListContext);

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Top picks</h2>
      <div className="flex overflow-x-auto gap-3 pb-4 px-2">
        {topPicks.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex-none w-48 min-w-[12rem] bg-[#EBE5C2] rounded-lg shadow-md overflow-hidden home-container"
          >
            <div className="h-48 overflow-hidden p-2">
              <img
                src={`images/${item.src}`}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 rounded-lg"
              />
            </div>
            <div className="p-2">
              <h3 className="text-base font-semibold truncate">{item.name}</h3>
              <p className="text-xs line-clamp-2">Up to 50% off on bulk orders.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Categories Section
const Categories = () => {
  const { categories } = useContext(ItemListContext);

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Shop By Category</h2>
      <p className="text-center text-gray-600 mb-8">Explore our wide range of wholesale products</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            to={`/products/${category.link}`}
            key={category.name}
            className={`p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all group bg-gradient-to-br ${category.gradient}`}
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#504B38]">{category.name}</h3>
            <div className="text-xs text-gray-500 mb-3">{category.itemCount}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {category.subCategories.map((sub, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-600"
                >
                  {sub}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-[#504B38] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Browse Category →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ItemListContext);

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Featured Products</h2>
      <p className="text-center text-gray-600 mb-6">Discover our top picks for you</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <Link to={product.link} key={product.id} className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img
                  src={`images/${product.image}`}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-[#504B38] text-white text-xs px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#504B38] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-semibold">{product.discount}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const { reviews } = useContext(ItemListContext);

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Customer Reviews</h2>
      <p className="text-center text-gray-600 mb-6">What our valued customers say about us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#929191] to-[#929191] text-white px-6 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">{review.date}</span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-300">★</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#504B38] p-1">
                    <img
                      src={`images/${review.avatar}`}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-lg">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.title}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex gap-2 mt-1">
                    {review.badges.map((badge, index) => (
                      <span key={index} className="px-2 py-1 bg-[#504B38] bg-opacity-10 text-[#fff] text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">"{review.review}"</blockquote>
              <div className="flex items-center justify-between text-sm border-t pt-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Purchased:</span>
                  <span className="ml-2 text-[#504B38]">{review.productBought}</span>
                </div>
                <button className="text-[#504B38] hover:underline">Helpful 👍</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#504B38] text-white rounded-lg hover:bg-[#635E48] transition-colors"
        >
          View All Reviews
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="text-[#504B38]">
      <HeroSection />
      <main className="w-full px-5 mt-10">
        <ExploreSection />
        <OffersSection />
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <Categories />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <FeaturedProducts />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6 mt-6">
          <TopPicks />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default Home;