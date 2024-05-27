import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants'

const Cryptocurrencies = () => {

    const [cryptoList, setCryptoList] = useState([]);

const fetchCryptocurrenciesData = async()=>{
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-WsHKrWvbdsc1D5Lh4xuUFaQY', options)
    const jsonData = await data.json()
    console.log(jsonData)
    setCryptoList(jsonData) 
} 

useEffect(()=>{
    fetchCryptocurrenciesData()
},[])

  return (
    <div>
      <h1>Cryptocurrencies List</h1>

    

    </div>
  )
}

export default Cryptocurrencies
