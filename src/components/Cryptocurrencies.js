import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants'

const Cryptocurrencies = () => {

    const [cryptoList, setCryptoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;

    const fetchCryptocurrenciesData = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-WsHKrWvbdsc1D5Lh4xuUFaQY', options)
        const jsonData = await data.json()
        // console.log(jsonData)
        setCryptoList(jsonData)
    }

    useEffect(() => {
        fetchCryptocurrenciesData()
    }, [])

    const totalPage = Math.ceil(cryptoList.length / itemPerPage)
    // console.log(totalPage)

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const currentItems = cryptoList.slice((currentPage - 1) * itemPerPage, itemPerPage * currentPage)
    // console.log(currentItems)

    return (
        <div className='justify-center p-4 bg-black text-white'>
            <table className='w-full  border-collapse shadow-lg bg-black'>
                <caption className='font-bold text-lg p-4'>Cryptocurrencies List</caption>
                <thead className='bg-yellow-600'>
                    <tr>
                        <th className='px-4 py-2 border'>#</th>
                        <th className='px-4 py-2 border'>Name</th>
                        <th className='px-4 py-2 border'>Price (USD)</th>
                        <th className='px-4 py-2 border'>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((crypto, index) => (
                        <tr key={crypto.id} >
                            <td className='px-4 py-2 border'>{(currentPage - 1) * itemPerPage + index + 1}</td>
                            <td className='px-4 py-2 border'>{crypto.name}</td>
                            <td className='px-4 py-2 border'>${crypto.current_price.toLocaleString()}</td>
                            <td className='px-4 py-2 border'>${crypto.market_cap.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='bg-yellow-900'>
                    <tr>
                        <td className='px-4 py-2 border' colSpan="4">Data provided by CoinGecko</td>
                    </tr>
                </tfoot>
            </table>
            <div className='flex justify-center'>
                {
                    (() => {
                        const buttons = [];
                        for (let i = 0; i < totalPage; i++) {
                            buttons.push(
                                <button className='bg-yellow-600 mx-3 px-2 my-2' onClick={()=>handlePagination(i+1)} key={i}>{i + 1}</button>
                            )
                        }
                        return buttons;
                    })()
                }
            </div>
        </div>
    );
};


export default Cryptocurrencies


