import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useState } from 'react'

const TrandingCoins = () => {

    const [trandingCoinsDataState, setTrandingCoinsDataState] = useState([])

    const trandingCoinsData = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-WsHKrWvbdsc1D5Lh4xuUFaQY', options)
        const jsonData = await data.json();
        setTrandingCoinsDataState(jsonData.coins)
        console.log(jsonData.coins)
    }

    useEffect(() => {
        trandingCoinsData()
    }, [])

    return (
        <>
            <h1 className='py-10 bg-black text-white text-3xl text-center'>Tranding Coins</h1>
            <div className='text-white flex flex-wrap bg-black h-auto justify-between'>
                {
                    trandingCoinsDataState.map((coin) =>
                    (<div className='mx-9 w-32 h-50 my-5 bg-black' key={coin?.item?.coin_id}>
                        <img className='w-32 rounded-md' src={coin?.item?.thumb} alt="coin" />
                        <h4 className='text-orange-500'>{coin?.item?.name}</h4>
                        <h5 className='font-thin'> Market Cap-{coin?.item?.data?.market_cap}</h5>
                    </div>

                    )
                    )
                }


            </div>
        </>
    )
}

export default TrandingCoins
