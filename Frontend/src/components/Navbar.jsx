import React, { use, useState } from 'react';
import '../index.css';
import profile from '../assets/profile.png';
import heartDefault from '../assets/heart-regular.svg';
import cart from '../assets/cart.png';
import heartHover from '../assets/heart-solid.svg';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/userApiSlice';


const WishlistIcon = () => {
  const [imgSrc, setImgSrc] = useState(heartDefault);
  return (
    <img 
      src={imgSrc}
      alt="Wishlist" 
      className="w-6 h-6 object-contain cursor-pointer transition-all duration-200 navbar"
      onMouseEnter={() => setImgSrc(heartHover)}
      onMouseLeave={() => setImgSrc(heartDefault)}
    />
  );
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  }


  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
      
    }
  }



  const {cartItems} = useSelector((state) => state.cart);

  // Sample data for suggestions
  const suggestions = [
    { id: 1, productName: "Apple iPhone", imageUrl: "/images/iphone.jpg"},
    { id: 2, productName: "Samsung Galaxy", imageUrl: "/images/galaxy.jpg" },
    { id: 3, productName: "Google Pixel", imageUrl: "/images/pixel.jpg" },
  ];

  // Filter suggestions based on search term (case-insensitive)
  const filteredSuggestions =
    searchTerm.trim() === ''
      ? suggestions
      : suggestions.filter(item =>
          item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const {userInfo} = useSelector((state) => state.auth);
  const userLoggedIn = userInfo ? true : false;
  const name = userInfo ? userInfo.name.split(" ")[0] : "";
  // console.log(name)


  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 !bg-white shadow-md z-50 navbar">
      {/* Left Section: Logo and Brand Name */}
      <Link to= '/'>
        <div className="flex items-center !bg-white">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-12 h-12 object-contain navbar"
          />
          <span className="ml-2 text-2xl font-bold text-black !bg-white">BizFlow</span>
        </div>
      </Link>

      {/* Center Section: Search Bar and Navigation Links */}
      <div className="flex flex-1 items-center font-monsterrat justify-center space-x-8 mx-4">
        <div className="relative w-[800px]">
          <input 
            type="text"
            placeholder="Search..."
            className="w-full p-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 navbar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            // Delay blur to allow click events on the dropdown items
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />

          {/* Dropdown suggestions */}
          {isFocused && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg navbar">
              <ul>
                {filteredSuggestions.map((item) => (
                  <li 
                    key={item.id}
                    className="flex items-center p-2 !bg-white hover:bg-gray-100 cursor-pointer"
                    // Add an onClick handler here to handle selection if needed
                  >
                    {/* Show image only when search term is empty */}
                    {searchTerm.trim() === '' && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.productName} 
                        className="w-8 h-8 mr-2 object-cover rounded" 
                      />
                    )}
                    <span className="flex-1 text-gray-700">{item.productName}</span>
                    {/* Show search icon only when user has typed something */}
                    {searchTerm.trim() !== '' && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-gray-500" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-10">
          <Link 
            to="/products" 
            className="text-gray-600 text-lg font-medium transition-all duration-300 hover:text-blue-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 text-lg font-medium transition-all duration-300 hover:text-blue-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Right Section: Navigation Links and Icons */}
      <div className="flex items-center space-x-7 navbar mr-2">
        <WishlistIcon />

        <Link to={"/cart"}>
          <div className='flex'>
            <img 
              src={cart} 
              alt="Cart" 
              className="w-7 h-7 object-contain cursor-pointer navbar"
            />
            {cartItems.length && cartItems.length}
          </div>
        </Link>
        
        
        {userLoggedIn ? (
          <div className='flex font-semibold cursor-pointer' onClick={handleProfileClick}>
            <img 
              src={profile} 
              alt="Profile" 
              className="w-7 h-7 object-contain navbar"
            />
            {name}

            {showProfile && 
              <div className="absolute z-10 mt-10 p-4 w-full bg-white border border-gray-300 rounded-md shadow-lg navbar flex flex-col gap-3">
                <Link>
                  <div>
                    Profile
                  </div>
                </Link>
                
                <div onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div >
        ) : (
          <Link to={'/login'}>
            <img 
              src={profile} 
              alt="Profile" 
              className="w-7 h-7 object-contain navbar"
            />
          </Link>
          
        ) 
        }


        <div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
