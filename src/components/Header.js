import React from 'react'
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const nevigate = useNavigate()

const handleCryptocurrencies = ()=>{
  nevigate("/cryptocurrencies")
}

  return (
    <div className='flex justify-between bg-black text-white'>

      <div className='w-36'>
        <img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJh85ySct4UGqUwtSwflqq8-GnC76vxkbkjTqJuFHaFlcLC2zPQs-zpq8KIAYlR5XqAg&usqp=CAU" alt="logo" />
      </div>

      <div>
        <input className='bg-black p-2 mt-4 px-60 rounded-md' type="text" placeholder='Search Coins eg:BitCoin' />
        <button className='bg-orange-500 m-2 px-6 py-2 rounded-lg'>Search</button>
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
