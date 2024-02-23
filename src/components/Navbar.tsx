import React from 'react'
import logo from "../images/logo_myntra.png"
import lens from "../images/lens.png"
import account from "../images/account.png"
import out from "../images/logout.png"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import heart from "../images/heart.png"
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface searchProp {
  setSearch?:any
  setMenu?:any
}

const Navbar = (props:searchProp) => {

  const navigate  = useNavigate()

  const logout = async() =>{
    try{
      await signOut(auth)
      toast.success("Logged Out successfully")
      setTimeout(()=>{
        !auth.currentUser && navigate("/")
      },1000)
    }catch(err){
      console.error(err)
      let error:any = err
      toast.error(error)
    }
  }

  const wishlist = () =>{
    auth.currentUser?.phoneNumber ? navigate("/wishlist")
    : toast.warning("Please login")
  }

  return (
    <>
    <ToastContainer autoClose={2000}/>
    <div className='flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg'>
        <Link to="/"><img src={logo} className='w-20 h-12 ml-5'/></Link>

        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("") : toast.warning("Please login")} className='ml-4 cursor-pointer'>All</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Computer") : toast.warning("Please login")} className='ml-8 cursor-pointer'>COMPUTER</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Shirt") : toast.warning("Please login")} className='ml-8 cursor-pointer'>SHIRT</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Pants") : toast.warning("Please login")} className='ml-8 cursor-pointer'>PANTS</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Keyboard") : toast.warning("Please login")} className='ml-8 cursor-pointer'>KEYBOARD</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Bike") : toast.warning("Please login")} className='ml-8 cursor-pointer'>BIKE</h1>
        <h1 onClick={()=> auth.currentUser?.phoneNumber ? props.setMenu("Mouse") : toast.warning("Please login")} className='ml-12 cursor-pointer'>MOUSE</h1>
        
        <div className='border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-14 '>
            <img src={lens} className='h-3 w-3 ml-4' />
            <input onChange={(e) => props.setSearch(e.target.value)} className="bg-gray-100  text-gray-900 font-normal outline-none text-sm rounded-sm block w-full p-2.5 ml-4" placeholder="Search for products" required/>
        </div>
        
        {auth.currentUser?.phoneNumber ? <div onClick={logout} className=' ml-6 text-xs'>
            <img src={out} className='w-5 h-5 ml-3' />
            <h1 className='cursor-pointer'>Logout</h1>
        </div>
        : <Link to="/login">
          <div className=' ml-6 text-xs'>
            <img src={account} className='w-5 h-5 ml-2' />
            <h1 className='cursor-pointer'>Login</h1>
          </div>
        </Link>}

        <div onClick={wishlist} className=' ml-6 text-xs'>
          <img src={heart} className='w-5 h-5 ml-3' />
          <h1 className='cursor-pointer'>Wishlist</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar