import React from 'react'
import { useSelector } from 'react-redux'


const Coin = () => {
    
const coinData = useSelector((state)=>state.search.items)
console.log(coinData)
    

  return (
    <div className='bg-black text-white h-screen'>
      <h1 className='text-center font-bold text-2xl p-4  text-yellow-500'>Detail Coin Information</h1>
      <div className=''>
        <div className='mt-8 flex justify-center items-center'>
        <img src={coinData.image.large} alt="coinImage" />
        <h2 className='ml-6 -mt-28 text-xl font-bold text-yellow-500'>{coinData.name}</h2>
        <h2 className='-mt-16 text-lg -ml-16'>Symbol-{coinData.symbol}</h2>
        <h2 className='-mt-6  -ml-28'>Marcket Cap Rank-{coinData?.market_cap_rank}</h2>
        <h2 className='mt-4 text-pretty -ml-40'>Total Volume-{coinData.market_data.total_volume.usd} USD</h2>
        </div>
        <div className=''>
            <p>{coinData?.description?.bg}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Coin
