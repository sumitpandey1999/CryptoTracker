import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { options } from '../utils/constants'

const CoinDetails = () => {
    const[coinDetail, setCoinDetail] = useState(null)
    const {id} = useParams()
    console.log(id)
    const lowercaseId = id.toLowerCase();
    console.log(lowercaseId)
    const fetchCoinDetails= async()=>{
        const data =await fetch(`https://api.coingecko.com/api/v3/coins/`+ lowercaseId, options)
        const jsonData =await data.json();
        setCoinDetail(jsonData)
        console.log(jsonData)

        console.log("sumit")
        
      }

      useEffect(()=>{
        fetchCoinDetails()
      },[id])


      if(!coinDetail ||  coinDetail.length===0) 
        return null
      

  return (
    <div>
       <div className='bg-black text-white h-screen'>
      <h1 className='text-center font-bold text-2xl p-4  text-yellow-500'>Detail Coin Information</h1>
      <div className=''>
        <div className='mt-8 flex justify-center items-center'>
        <img src={coinDetail.image.large} alt="coinImage" />
        <h2 className='ml-6 -mt-28 text-xl font-bold text-yellow-500'>{coinDetail.name}</h2>
        <h2 className='-mt-16 text-lg -ml-16'>Symbol-{coinDetail.symbol}</h2>
        <h2 className='-mt-6  -ml-28'>Marcket Cap Rank-{coinDetail?.market_cap_rank}</h2>
        <h2 className='mt-4 text-pretty -ml-40'>Total Volume-{coinDetail.market_data.total_volume.usd} USD</h2>
        </div>
        <div className=''>
            <p>{coinDetail?.description?.bg}</p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default CoinDetails
