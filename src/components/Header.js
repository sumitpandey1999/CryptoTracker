import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearch } from '../utils/serachSlice';
const Header = () => {

  const nevigate = useNavigate()

  const dispatch = useDispatch()

  const [searchQuery, setSerachQuery] = useState("")

const handleCryptocurrencies = ()=>{
  nevigate("/cryptocurrencies")
}

const handleSearchButton = async()=>{
  const data =await fetch(`https://api.coingecko.com/api/v3/coins/${searchQuery}`, options)
  const jsonData =await data.json();
  console.log(jsonData)
  dispatch(addSearch(jsonData))
  nevigate("/coin")
  
}


  return (
    <div className='flex justify-between bg-black text-white'>

      <div className='w-36'>
        <img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJh85ySct4UGqUwtSwflqq8-GnC76vxkbkjTqJuFHaFlcLC2zPQs-zpq8KIAYlR5XqAg&usqp=CAU" alt="logo" />
      </div>

      <div>
        <input 
        className='bg-black p-2 mt-4 px-60 rounded-md'
        type="text"
        placeholder='Search Coins eg:BitCoin'
        onChange={(e)=>setSerachQuery(e.target.value)}
         />
        <button
         className='bg-orange-500 m-2 px-6 py-2 rounded-lg'
         onClick={handleSearchButton}
         >Search</button>
      </div>

      <div>
        <button 
        className='bg-orange-500 m-2 px-6 py-2 rounded-lg my-4'
        onClick={handleCryptocurrencies}
        >Cryptocurrencies</button>
      </div>
      <div>
        <button className='bg-orange-500 m-2 px-6 py-2 rounded-lg my-4'>Get Started</button>
      </div>

    </div>

  )
}

export default Header
