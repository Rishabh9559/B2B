import { createContext, useState } from "react";

//DEFAULT DATA
// hero images
const D_HERO_IMG = [
  "images/hero/hero7.jpeg",
  "images/hero2.jpeg",
  "images/hero3.jpeg",
  "images/hero4.jpeg"
];

//explore items
const D_EXPLORE_ITEMS = [
  {
    title: "New Arrivals",
    description: "Check out our latest collections",
    images: [
      {
        src: "new-arrivals/t-shirt.jpeg",
        name: "T-Shirts",
        link: "/product/0/t-shirts"
      },
      {
        src: "new-arrivals/excercise-hand-gripper.jpg",
        name: "Hand Grippers",
        link: "/product/1/hand-grippers"
      },
      {
        src: "new-arrivals/min-table-fan.jpg",
        name: "Mini Table Fans",
        link: "/product/2/mini-fans"
      },
      {
        src: "new-arrivals/women-shirt.jpeg",
        name: "Women Shirts",
        link: "/product/3/women-shirts"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "Best Sellers",
    description: "Most popular items this season",
    images: [
      {
        src: "best-seller/travel bags.jpeg",
        name: "Travelling Bags",
        link: "/product/0/travelling-bags"
      },
      {
        src: "best-seller/tshirt.webp",
        name: "T-Shirts",
        link: "/product/1/t-shirts"
      },
      {
        src: "best-seller/watch3.webp",
        name: "Watches",
        link: "/product/2/watches"
      },
      {
        src: "best-seller/dell_laptop.png",
        name: "Laptops",
        link: "/product/3/laptops"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "Seasonal Highlights",
    description: "Handpicked seasonal products in bulk",
    images: [
      {
        src: "seasonal/hoody.jpg",
        name: "Winter Hoodies",
        link: "/product/0/winter-hoodies"
      },
      {
        src: "seasonal/coat1.webp",
        name: "Winter Coats",
        link: "/product/1/winter-coats"
      },
      {
        src: "seasonal/coat2.webp",
        name: "Premium Coats",
        link: "/product/2/premium-coats"
      },
      {
        src: "seasonal/coat3.jpg",
        name: "Designer Coats",
        link: "/product/3/designer-coats"
      }
    ],
    bgColor: "bg-[#eceaea]"
  }
];

//offer items
const D_OFFER_ITEMS = [
  {
    title: "Flash Sale ⚡",
    description: "24 Hours Only - Up to 70% Off",
    images: [
      {
        src: "flash-sale/casual shoes.webp",
        name: "Casual Shoes",
        link: "/offer/casual-shoes"
      },
      {
        src: "flash-sale/man shirts 4.avif",
        name: "Men Shirts",
        link: "/offer/men-shirts"
      },
      {
        src: "flash-sale/shirts.webp",
        name: "Shirts",
        link: "/offer/shirts"
      },
      {
        src: "flash-sale/topPicks3.jpg",
        name: "Top Picks",
        link: "/offer/top-picks"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "Minimum Order Deals 📦",
    description: "Extra savings on minimum order quantity",
    images: [
      {
        src: "min-order-deals/headphone.jpeg",
        name: "Headphones",
        link: "/offer/headphones"
      },
      {
        src: "min-order-deals/men-shirts.avif",
        name: "Men Shirts",
        link: "/offer/men-shirts"
      },
      {
        src: "min-order-deals/watch.avif",
        name: "Watches",
        link: "/offer/watches"
      },
      {
        src: "min-order-deals/female-sport-shoes.webp",
        name: "Female Sport Shoes",
        link: "/offer/female-sport-shoes"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "Supplier-Sponsored Offers 🤝",
    description: "Top vendor-backed discount bundles",
    images: [
      {
        src: "supplier-sponsored/sony-headphone.jpg",
        name: "Sony Headphones",
        link: "/offer/sony-headphones"
      },
      {
        src: "supplier-sponsored/sport-shoes.webp",
        name: "Sport Shoes",
        link: "/offer/sport-shoes"
      },
      {
        src: "supplier-sponsored/watch.webp",
        name: "Watches",
        link: "/offer/watches"
      },
      {
        src: "supplier-sponsored/woman-summer-dress.avif",
        name: "Woman Summer Dress",
        link: "/offer/woman-summer-dress"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "First Order Benefits 🆕",
    description: "Special discount for first-time B2B buyers",
    images: [
      {
        src: "first-order/casual-shoes.webp",
        name: "Casual Shoes",
        link: "/offer/casual-shoes"
      },
      {
        src: "first-order/tshirt.webp",
        name: "T-Shirts",
        link: "/offer/t-shirts"
      },
      {
        src: "first-order/woman-summer-dress.avif",
        name: "Woman Summer Dress",
        link: "/offer/woman-summer-dress"
      },
      {
        src: "first-order/casual-shoes1.webp",
        name: "Casual Shoes",
        link: "/offer/casual-shoes-alt"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "New Vendor Specials 🏢",
    description: "Special discount for first-time B2B buyers",
    images: [
      {
        src: "new-vendor/gaming-headphone.webp",
        name: "Gaming Headphones",
        link: "/offer/gaming-headphones"
      },
      {
        src: "new-vendor/summer-dress.avif",
        name: "Summer Dress",
        link: "/offer/summer-dress"
      },
      {
        src: "new-vendor/toys.png",
        name: "Toys",
        link: "/offer/toys"
      },
      {
        src: "new-vendor/watch.webp",
        name: "Watches",
        link: "/offer/watches"
      }
    ],
    bgColor: "bg-[#eceaea]"
  },
  {
    title: "Referral Bonus Products 🔄",
    description: "Get deals when referring other businesses",
    images: [
      {
        src: "referral-bonus/men-shirt.avif",
        name: "Men Shirt",
        link: "/offer/men-shirt"
      },
      {
        src: "referral-bonus/school-shoes.webp",
        name: "School Shoes",
        link: "/offer/school-shoes"
      },
      {
        src: "referral-bonus/summer-dress.avif",
        name: "Summer Dress",
        link: "/offer/summer-dress"
      },
      {
        src: "referral-bonus/tshirt.webp",
        name: "T-Shirt",
        link: "/offer/t-shirt"
      }
    ],
    bgColor: "bg-[#eceaea]"
  }
];

//top picks items
const D_TOP_PICKS = [
  {
    src: "top-picks/bag.jpg",
    name: "Designer Bags",
    link: "/product/0/designer-bags"
  },
  {
    src: "top-picks/study-table.jpg",
    name: "Study Tables",
    link: "/product/1/study-tables"
  },
  {
    src: "top-picks/formal-shoes.jpg",
    name: "Formal Shoes",
    link: "/product/2/formal-shoes"
  },
  {
    src: "top-picks/headphone.jpg",
    name: "Headphones",
    link: "/product/3/headphones"
  },
  {
    src: "top-picks/juicer.jpg",
    name: "Juicers",
    link: "/product/4/juicers"
  },
  {
    src: "top-picks/watch.avif",
    name: "Watches",
    link: "/product/5/watches"
  },
  {
    src: "top-picks/water-bottle.jpg",
    name: "Water Bottles",
    link: "/product/6/water-bottles"
  },
  {
    src: "top-picks/microwave-oven.jpg",
    name: "Microwave Ovens",
    link: "/product/7/microwave-ovens"
  },
];

//categories
  // Electronics
  // Home Appliances
  // Fitness
  // Clothing
  // Daily Usage
  // Stationery
const D_CATEGORIES = [
  {
    name: "Electronics",
    icon: "💻",
    subCategories: ["Phones", "Laptops", "TVs", "Audio"],
    itemCount: "50K+ Products",
    link: "Electronics",
    gradient: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "Fashion",
    icon: "👔",
    subCategories: ["Men", "Women", "Kids", "Accessories"],
    itemCount: "35K+ Products",
    link: "Clothing",
    gradient: "from-pink-500/10 to-purple-600/10"
  },
  {
    name: "Home & Living",
    icon: "🏠",
    subCategories: ["Furniture", "Decor", "Kitchen", "Garden"],
    itemCount: "28K+ Products",
    link: "HomeAppliances",
    gradient: "from-amber-500/10 to-yellow-600/10"
  },
  {
    name: "Beauty",
    icon: "✨",
    subCategories: ["Makeup", "Skincare", "Haircare", "Fragrances"],
    itemCount: "22K+ Products",
    // link: "/category/beauty",
    gradient: "from-red-500/10 to-pink-600/10"
  },
  {
    name: "Sports & Fitness ",
    icon: " 🏋️‍♂️ ",
    subCategories: ["Equipment", "Clothing", "Supplements", "Accessories"],
    itemCount: "15K+ Products",
    link: "Fitness",
    gradient: "from-green-500/10 to-emerald-600/10"
  },
  {
    name: "Books & Media",
    icon: "📚",
    subCategories: ["Books", "eBooks", "Movies", "Music"],
    itemCount: "40K+ Products",
    link: "/category/books-media",
    gradient: "from-orange-500/10 to-red-600/10"
  },
  {
    name: "Automotive",
    icon: "🚗",
    subCategories: ["Parts", "Accessories", "Tools", "Care"],
    itemCount: "18K+ Products",
    link: "/category/automotive",
    gradient: "from-slate-500/10 to-gray-600/10"
  },
  {
    name: "Toys & Games",
    icon: "🎮",
    subCategories: ["Gaming", "Board Games", "Kids Toys", "Outdoor"],
    itemCount: "25K+ Products",
    link: "/category/toys-games",
    gradient: "from-indigo-500/10 to-blue-600/10"
  }
];

//featured products
const D_FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "boAt Airdopes 131",
    price: "₹1,299",
    originalPrice: "₹2,999",
    discount: "57% off",
    rating: 4.8,
    reviews: 2547,
    image: "featured-products/boat_earbud.jpg",
    badge: "Best Seller",
    link: "/product/boat-airdopes-131"
  },
  {
    id: 2,
    name: "Study Table Modern Design",
    price: "₹4,999",
    originalPrice: "₹9,999",
    discount: "50% off",
    rating: 4.6,
    reviews: 1823,
    image: "featured-products/table.webp",
    badge: "New Arrival",
    link: "/product/study-table"
  },
  {
    id: 3,
    name: "Samsung Double Door Refrigerator",
    price: "₹34,999",
    originalPrice: "₹44,999",
    discount: "22% off",
    rating: 4.7,
    reviews: 958,
    image: "featured-products/refrigerator.jpeg",
    badge: "Deal of the Day",
    link: "/product/samsung-refrigerator"
  },
  {
    id: 4,
    name: "ASUS VivoBook Flip 14 TouchScreen",
    price: "₹54,999",
    originalPrice: "₹69,999",
    discount: "21% off",
    rating: 4.8,
    reviews: 1247,
    image: "featured-products/Laptop.jpeg",
    badge: "Top Rated",
    link: "/product/asus-vivobook-flip"
  }
];

//reviews
const D_REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Verified Buyer ✓",
    rating: 5,
    date: "2 weeks ago",
    review: "Outstanding experience! The product quality exceeded my expectations. The delivery was quick, and the customer service team was extremely helpful. Will definitely shop again!",
    productBought: "iPhone 14 Pro",
    avatar: "reviews/customer1.jpeg",
    location: "Mumbai, India",
    badges: ["Top Reviewer", "Early Adopter"]
  },
  {
    id: 2,
    name: "Rahul Verma",
    title: "Premium Member 🌟",
    rating: 5,
    date: "1 month ago",
    review: "The exchange offer was fantastic! Got a great deal on my new laptop. The process was smooth, and the staff was very professional. Highly recommended!",
    productBought: "MacBook Pro",
    avatar: "reviews/customer2.jpeg",
    location: "Delhi, India",
    badges: ["Power User"]
  },
  {
    id: 3,
    name: "Anita Patel",
    title: "Regular Customer 💎",
    rating: 4,
    date: "3 weeks ago",
    review: "Been shopping here for years. The loyalty program benefits are amazing, and the product range keeps getting better. Super satisfied with recent purchases!",
    productBought: "Sony WH-1000XM4",
    avatar: "reviews/customer3.jpeg",
    location: "Bangalore, India",
    badges: ["Loyal Customer"]
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    title: "Tech Enthusiast 🚀",
    rating: 5,
    date: "1 week ago",
    review: "The technical support team is outstanding! They helped me choose the perfect gaming setup. Competitive prices and genuine products. A+ service!",
    productBought: "Gaming PC Setup",
    avatar: "reviews/customer4.jpeg",
    location: "Hyderabad, India",
    badges: ["Tech Expert"]
  }
];

export const ItemListContext = createContext({
  heroImg: [],
  exploreItems: [],
  offerItems: [],
  topPicks: [],
  categories: [],
  featuredProducts: [],
  reviews: [],
});

export const ItemListProvider = ({ children }) => {
  const [heroImg] = useState(D_HERO_IMG);
  const [exploreItems] = useState(D_EXPLORE_ITEMS);
  const [offerItems] = useState(D_OFFER_ITEMS);
  const [topPicks] = useState(D_TOP_PICKS);
  const [categories] = useState(D_CATEGORIES);
  const [featuredProducts] = useState(D_FEATURED_PRODUCTS);
  const [reviews] = useState(D_REVIEWS);

  return (
    <ItemListContext.Provider value={{
      heroImg,
      exploreItems,
      offerItems,
      topPicks,
      categories,
      featuredProducts,
      reviews,
    }}>
      {children}
    </ItemListContext.Provider>
  );
}