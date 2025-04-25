// REPLACE THE IMAGE URL TO A CORRECT ONE

const products = [
    {
        "name": "Apple iPhone 15 (128 GB)",
        "description": "The latest iPhone with a 6.7-inch Super Retina XDR display, A16 Bionic chip, and advanced triple-camera system.",
        "category": "Electronics",
        "brand": "Apple",
        "price": "91,499",  
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
        "inStock": "500",
        "reviews": [
            {
                "name": "TechGuru",
                "rating": 5,
                "comment": "The camera and performance are exceptional, truly worth the upgrade!"
            },
            {
                "name": "SmartShopper",
                "rating": 4,
                "comment": "Great phone but battery life could use some improvement."
            }
        ]
    },
    {
        "name": "Samsung 138 cm (55-inch) 4K UHD Smart TV",
        "description": "A 55-inch 4K UHD smart TV with HDR, voice control, and built-in apps for Netflix, YouTube, and more.",
        "category": "Electronics",
        "brand": "Samsung",
        "price": "45,699", 
        "image": "https://m.media-amazon.com/images/I/81mLFIaCYwL.jpg",
        "inStock": "200",
        "reviews": [
            {
                "name": "MovieBuff123",
                "rating": 5,
                "comment": "Picture quality is stunning, perfect for movie nights!"
            },
            {
                "name": "TechFanatic",
                "rating": 4,
                "comment": "Great TV overall, but the sound could be better."
            }
        ],
        rating: "4.5",
    },
    {
        "name": "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
        "description": "A powerful cordless vacuum with up to 60 minutes of run time, intelligent suction power, and advanced filtration.",
        "category": "Home Appliances",
        "brand": "Dyson",
        "price": "58,199",  
        "image": "https://dynamicvac.com/cdn/shop/files/dyson-v11-corldess-stick-vacuum-6bf0d478-11d9-4984-985f-e4e825e92c1e-jpgrendition.jpg?v=1729639090&width=1946",
        "inStock": "300",
        "reviews": [
            {
                "name": "CleanFreak",
                "rating": 5,
                "comment": "This vacuum has incredible suction power and is super easy to use."
            },
            {
                "name": "HouseholdQueen",
                "rating": 4,
                "comment": "Great performance, but it's a bit heavy for prolonged use."
            }
        ],
        rating: "4.8",
    },
    {
        "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        "description": "A versatile electric pressure cooker that can also be used as a slow cooker, rice cooker, steamer, and yogurt maker.",
        "category": "Home Appliances",
        "brand": "Instant Pot",
        "price": "7,479", 
        "image": "https://images-cdn.ubuy.co.in/63eed035df3e5717a56bc995-instant-pot-duo-7-in-1-electric-pressure.jpg",
        "inStock": "1000",
        "reviews": [
            {
                "name": "KitchenMaster",
                "rating": 5,
                "comment": "Perfect for making quick, delicious meals. A real game-changer!"
            },
            {
                "name": "BusyMom",
                "rating": 4,
                "comment": "Great for family meals, but it takes up a bit of counter space."
            }
        ],
        rating: "4.7",
    },
    {
        "name": "Fitbit Charge 5 Fitness and Health Tracker",
        "description": "A sleek fitness tracker with built-in GPS, heart rate monitor, and stress management tools.",
        "category": "Fitness",
        "brand": "Fitbit",
        "price": "14,949",  
        "image": "https://in.static.webuy.com/product_images/Electronics/Activity%20Trackers/0810038857237C_l.jpg",
        "inStock": "400",
        "reviews": [
            {
                "name": "ActiveJoe",
                "rating": 5,
                "comment": "Fantastic tracker, I can monitor everything from heart rate to sleep quality!"
            },
            {
                "name": "FitnessFreak",
                "rating": 4,
                "comment": "Great for workouts, but the display could be brighter."
            }
        ],
        rating: "4.6",
    },
    {
        "name": "Adidas Urbann 5 Running Shoes",
        "description": "High-performance running shoes with cushioned soles and breathable mesh upper.",
        "category": "Fitness",
        "brand": "Adidas",
        "price": "6,999", 
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2147f7ab294341d09fe787f08ed921a5_9366/Ultrarun_5_Running_Shoes_White_IE8791_01_standard.jpg",
        "inStock": "350",
        "reviews": [
            {
                "name": "ComfortRunner",
                "rating": 5,
                "comment": "These are the most comfortable running shoes I've ever worn!"
            },
            {
                "name": "RecoveryRun",
                "rating": 4,
                "comment": "Perfect for recovery runs, but they might not be the best for speedwork."
            }
        ],
        rating: "4.5",
    },
    {
        "name": "Levi's 501 Original Fit Jeans",
        "description": "Classic blue denim jeans with a straight-leg cut and signature Levi’s stitching.",
        "category": "Clothing",
        "brand": "Levi's",
        "price": "4,499", 
        "image": "https://images-cdn.ubuy.co.in/655431a87bad4e07c04e0405-levi-s-men-s-501-original-fit-jeans.jpg", 
        "inStock": "500",
        "reviews": [
            {
                "name": "StyleSeeker",
                "rating": 5,
                "comment": "Great fit and very stylish, they go with everything!"
            },
            {
                "name": "CasualWearer",
                "rating": 4,
                "comment": "Love the fit, but the denim feels a little stiff at first."
            }
        ],
        rating: "4.4",
    },
    {
        "name": "Nike Dri-FIT Training T-shirt",
        "description": "Lightweight, moisture-wicking training t-shirt designed for maximum performance.",
        "category": "Clothing",
        "brand": "Nike",
        "price": "1,999", 
        "image": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c7a010d4-43a8-4c18-8f71-48eac5dcda18/AS+M+NK+DF+PRIMARY+STMT+SS.png",
        "inStock": "1000",
        "reviews": [
            {
                "name": "FitFanatic",
                "rating": 5,
                "comment": "Perfect for workouts, keeps me dry throughout!"
            },
            {
                "name": "GymJunkie",
                "rating": 4,
                "comment": "Very comfortable, but wish it came in more colors."
            }
        ],
        rating: "4.6",
    },
    {
        "name": "Dot and Key Super Hydrating Gel Cream",
        "description": "Anti-aging cream designed to reduce wrinkles and firm skin, leaving your face smooth and radiant.",
        "category": "Daily Usage",
        "brand": "Olay",
        "price": "1,399",  
        "image": "https://www.dotandkey.com/cdn/shop/files/1-Br-SS.jpg?v=1740473453",
        "inStock": "600",
        "reviews": [
            {
                "name": "GlowUp",
                "rating": 5,
                "comment": "My skin looks smoother and firmer after just a few weeks of use!"
            },
            {
                "name": "SkincareObsessed",
                "rating": 4,
                "comment": "Great for reducing fine lines, but it can feel greasy sometimes."
            }
        ],
        rating: "4.7",
    },
    {
        "name": "Gillette Fusion ProGlide Razor",
        "description": "Precision razor with five blades for a close shave, and a lubrication strip for comfort.",
        "category": "Daily Usage",
        "brand": "Gillette",
        "price": "799",  
        "image": "https://m.media-amazon.com/images/I/81kfZhNWM-L.jpg",
        "inStock": "800",
        "reviews": [
            {
                "name": "SmoothShaver",
                "rating": 5,
                "comment": "The smoothest shave I've had in years, no nicks or cuts!"
            },
            {
                "name": "SharpEdge",
                "rating": 4,
                "comment": "Good razor, but the blades wear out a bit faster than I expected."
            }
        ],
        rating: "4.5",
    },
    {
        "name": "Moleskine Classic Notebook",
        "description": "Premium quality notebook with a hard cover, perfect for journaling and note-taking.",
        "category": "Stationery",
        "brand": "Moleskine",
        "price": "1,199", 
        "image": "https://images-cdn.ubuy.co.in/635d561d68bc5105456c7062-moleskine-classic-notebook-hard-cover.jpg",
        "inStock": "1500",
        "reviews": [
            {
                "name": "NoteTaker",
                "rating": 5,
                "comment": "The paper quality is fantastic, perfect for writing and sketching."
            },
            {
                "name": "CreativeWriter",
                "rating": 4,
                "comment": "Beautiful notebook, but it could be a little thicker."
            }
        ],
        rating: "4.6",
    },
    {
        "name": "Pilot G2 Gel Pens (Pack of 5)",
        "description": "Smooth-flowing gel pens with a fine point for precise writing.",
        "category": "Stationery",
        "brand": "Pilot",
        "price": "199",  
        "image": "https://m.media-amazon.com/images/I/81j2s7V2ncL.jpg",
        "inStock": "3000",
        "reviews": [
            {
                "name": "SmoothWriter",
                "rating": 5,
                "comment": "These pens write like a dream, smooth and consistent."
            },
            {
                "name": "PenCollector",
                "rating": 4,
                "comment": "Great pens, but I wish the ink lasted a little longer."
            }
        ],
        rating: "4.8",
    }
]


export default products;

// const productSchema = new mongoose.Schema({
//     seller: {
//         type: mongoose.Schema.Types.ObjectId,
//         require: true,
//         ref: "User",
//     },
//     
//     reviews: [reviewSchema],
// }, {
//     timestamps: true,
// });
