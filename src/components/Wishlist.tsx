import React, { useEffect, useState } from 'react'
import clothes from "../images/clothes.jpg"
import Navbar from './Navbar'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'

const Wishlist = () => {

    const [productList,setProductList] = useState([])

    const getProduct = async() => {
        try{
            const userDoc = doc(database, "users", `${auth.currentUser?.uid}`)
            const productDoc = collection(userDoc, "product") 
            const data = await getDocs(productDoc)
            const filteredData : any = data.docs.map((doc)=>({
                ...doc.data()
            }))
            setProductList(filteredData)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
    <>
    <Navbar/>
    <h1 className='text-lg font-bold p-10'>My Wishlist</h1>
    <div className='grid grid-cols-4 p-10'>
    {productList.map((product:any)=>{
        return <>
            <div className='w-64 h-96 mb-12 p-1 border border-spacing-1 shadow-lg'>
                <img src={product.data.images[0]} className='w-64 h-72'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='ml-2 mt-2 text-sm font-bold'>{product.data.title}</h1>
                    <div className='flex items-center mt-2'>
                        <h1 className='2xl font-bold'>Rs. {product.data.price}</h1>
                        <h1 className='ml-2 line-through text-gray-500'>Rs.{product.data.price + 500}</h1>
                        <h1 className='ml-2 font-bold text-orange-500'>(Rs. 500 OFF)</h1>
                    </div>
                </div>
            </div>
        </>
    })}
    </div>
    </>
    )
}

export default Wishlist