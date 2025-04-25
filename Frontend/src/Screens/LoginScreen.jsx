import React, { useState, useRef, useEffect  } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { hide, show } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { useLoginMutation } from '../slices/userApiSlice';
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showErrorDialogBox, setShowErrorDialogBox] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef(null);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Login, {isLoading}] = useLoginMutation();
    const {userInfo} = useSelector((state) => state.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if(userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);
    

    const doNothing = () => {
        setShowErrorDialogBox(false);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
        setTimeout(() => passwordRef.current?.focus(), 0);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await Login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            // toast.success("Login Successful!"); 
            navigate(redirect);
            
        } catch (error) {
            console.log(error);
            setShowErrorDialogBox(true);
            
        }


        // toast.info("Login button clicked!"); // This should appear immediately
    };
    
  return (
    <>
        {/* <Nav /> */}
        <div className='w-full px-4 py-24 sm:pt-28 flex justify-center items-center font-montserrat'>
            <div className='w-96 p-12 border-x-2 mt-16'>
                <h1 className='text-3xl mb-4 font-bold text-coral-red'>Sign In</h1>
            
                <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                    <label className='flex flex-col gap-2'>
                        Email: 
                        <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                            <input className='focus:outline-none bg-[#fffbfb00]' type= "email" value={email} onChange={(e) => setEmail((a) => a = e.target.value)} />
                            <img className='w-auto h-6' src="#" alt="" />
                        </div>
                    </label>
                    
                    <label className='flex flex-col gap-2'>
                        Password:
                        <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red relative'>
                            <input
                                ref={passwordRef}
                                className='focus:outline-none bg-transparent w-full'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword((a) => a = e.target.value)}
                                
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3"
                                onClick={() => togglePasswordVisibility()}
                            >
                                <img width={20} src={showPassword ? hide : show} alt="Hide or show password" />
                            </button>
                        </div>
                    </label>
                    
                    <button type='submit' className='border-2 border-[#5c5742] rounded-md bg-[#EBE5C2] hover:text-white p-4 cursor-pointer hover:bg-[#5c5742] font-bold text-xl' >
                        Login
                    </button>

                    {/* <button onClick={() => toast.success("Toast test!")} className="border-2 p-2 bg-green-500 text-white">
                        Test Toast
                    </button> */}

                    {/* <input className='border-2 rounded-md bg-coral-red text-white p-4 cursor-pointer hover:bg-[#f05d4d] font-bold text-xl' type='submit' value={"Login"} /> */}
                    
                </form>

                <div className='p-2 mt-4'>
                    <p>New Custome? <span className='text-coral-red font-bold underline'><Link to='/register'>Register</Link></span></p>
                </div>

            </div>
        </div>


        {/* <section className='bg-black padding'>
            <Footer />
        </section> */}

        {showErrorDialogBox && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-[#5d5843] p-6 border-2 border-red-500 rounded-lg shadow-lg">
                    <p className="text-lg font-bold mb-4">⚠️ Invalid Email or Password❗</p>
                    <div className="flex justify-end gap-4">
                    <button onClick={doNothing} className="px-4 py-2 bg-coral-red text-white rounded-md">Ok</button>
                    </div>
                </div>
            </div>
        )}

    </>
    
  )
}

export default LoginScreen